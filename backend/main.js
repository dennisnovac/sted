"use strict";
/* global module: false, console: false, __dirname: false, process: false */

var cors = require('cors');
var express = require('express');
var upload = require('jquery-file-upload-middleware');
var bodyParser = require('body-parser');
var fs = require('fs');
var _ = require('lodash');
var app = express();
var gmagic = require('gm');
var gm = gmagic.subClass({imageMagick: true});
var config = require('../server-config.js');
var extend = require('util')._extend;
var url = require('url');
var request = require('request');

app.use(cors({credentials: true, origin: true}));

app.use(require('connect-livereload')({ ignore: [/^\/dl/, /^\/img/] }));
// app.use(require('morgan')('dev'));

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  limit: '10mb',
  extended: true
})); 


// Save edited images using aviary
app.post('/savie', function(req, res){

    var newUrl = req.body.link;
    var newUrlMin = 'http://process.filestackapi.com/AhTgLagciQByzXpFGRI0Az/resize=width:90/'+newUrl;
    var newName = 'uploads/' + newUrl.substr(newUrl.lastIndexOf('/') + 1);
    var newNameThumb = 'uploads/thumbnail/' + newUrl.substr(newUrl.lastIndexOf('/') + 1);

    request(newUrl, {encoding: 'binary'}, function(error, response, body) {
      fs.writeFile(newName, body, 'binary', function (err) {});
    });
    request(newUrlMin, {encoding: 'binary'}, function(error, response, body) {
      fs.writeFile(newNameThumb, body, 'binary', function (err) {});
    });

});

var listFiles = function (req, options, callback) {

    var files = [];
    var counter = 1;
    var finish = function () {
        if (!--counter)
            callback(files);
    };

    var uploadHost = req.protocol + '://' + req.get('host');

    fs.readdir(options.uploadDir, _.bind(function (err, list) {
        _.each(list, function (name) {
            var stats = fs.statSync(options.uploadDir + '/' + name);
            if (stats.isFile()) {
                var file = {
                    name: name,
                    url: uploadHost + options.uploadUrl + '/' + name,
                    size: stats.size
                };
                _.each(options.imageVersions, function (value, version) {
                    counter++;
                    fs.exists(options.uploadDir + '/' + version + '/' + name, function (exists) {
                        if (exists)
                            file.thumbnailUrl = uploadHost + options.uploadUrl + '/' + version + '/' + name;
                        finish();
                    });
                });
                files.push(file);
            }
        }, this);
        finish();
    }, this));
}; 

var uploadOptions = {
  tmpDir: '.tmp',
  uploadDir: './uploads',
  uploadUrl: '/uploads',
  imageVersions: { thumbnail: { width: 90, height: 90 } }
};

var uploadHolidayOptions = {
  tmpDir: '.tmp',
  uploadDir: './uploads/holiday',
  uploadUrl: '/uploads/holiday',
  imageVersions: { thumbnail: { width: 90, height: 90 } }
};

var uploadNatureOptions = {
  tmpDir: '.tmp',
  uploadDir: './uploads/nature',
  uploadUrl: '/uploads/nature',
  imageVersions: { thumbnail: { width: 90, height: 90 } }
};

var uploadPromotionOptions = {
  tmpDir: '.tmp',
  uploadDir: './uploads/promotion',
  uploadUrl: '/uploads/promotion',
  imageVersions: { thumbnail: { width: 90, height: 90 } }
};

app.get('/upload/', function(req, res) {
    listFiles(req, uploadOptions, function (files) {
      res.json({ files: files });
    }); 
});

app.get('/holiday/', function(req, res) {
    listFiles(req, uploadHolidayOptions, function (files) {
      res.json({ files: files });
    }); 
});

app.get('/nature/', function(req, res) {
    listFiles(req, uploadNatureOptions, function (files) {
      res.json({ files: files });
    }); 
});

app.get('/promotion/', function(req, res) {
    listFiles(req, uploadPromotionOptions, function (files) {
      res.json({ files: files });
    }); 
});

app.use('/upload/', upload.fileHandler(uploadOptions));
app.use('/holiday/', upload.fileHandler(uploadHolidayOptions));
app.use('/nature/', upload.fileHandler(uploadNatureOptions));
app.use('/promotion/', upload.fileHandler(uploadPromotionOptions));

// imgProcessorBackend + "?src=" + encodeURIComponent(src) + "&method=" + encodeURIComponent(method) + "&params=" + encodeURIComponent(width + "," + height);
app.get('/img/', function(req, res) {

    var params = req.query.params.split(',');

    if (req.query.method == 'placeholder') {
        var out = gm(params[0], params[1], '#EEF0F3');
        res.set('Content-Type', 'image/png');
        var x = 0, y = 0;
        var size = 40;
        // stripes
        while (y < params[1]) {
            out = out
              .fill('#F2F4F7')
              .drawPolygon([x, y], [x + size, y], [x + size*2, y + size], [x + size*2, y + size*2])
              .drawPolygon([x, y + size], [x + size, y + size*2], [x, y + size*2]);
            x = x + size*2;
            if (x > params[0]) { x = 0; y = y + size*2; }
        }
        // text
        out.fill('#B4B7BD').fontSize(17).drawText(0, 0, params[0] + ' x ' + params[1], 'South').stream('png').pipe(res);

    } else if (req.query.method == 'resize' || req.query.method == 'cover') {
        // NOTE: req.query.src is an URL but gm is ok with URLS.
        // We do parse it to localpath to avoid strict "securityPolicy" found in some ImageMagick install to prevent the manipulation
        var urlparsed = url.parse(req.query.src);
        var src = "./"+decodeURI(urlparsed.pathname);

        var ir = gm(src);
        ir.format(function(err,format) {
            if (!err) {
                res.set('Content-Type', 'image/'+format.toLowerCase());
                if (req.query.method == 'resize') {
                    ir.autoOrient().resize(params[0] == 'null' ? null : params[0], params[1] == 'null' ? null : params[1]).stream().pipe(res);
                } else {
                    ir.autoOrient().resize(params[0],params[1]+'^').gravity('Center').extent(params[0], params[1]+'>').stream().pipe(res);
                }
            } else {
                console.error("ImageMagick failed to detect image format for", src, ". Error:", err);
            }
        });

    }

});

app.post('/dl/', function(req, res) {
    var response = function(source) {
        
        if (req.body.action == 'download') {
            res.setHeader('Content-disposition', 'attachment; filename=' + req.body.filename);
            res.setHeader('Content-type', 'text/html');
            res.write(source);
            res.end();
        } else if (req.body.action == 'email') {
            var nodemailer = require('nodemailer');
            var transporter = nodemailer.createTransport(config.emailTransport);

            var mailOptions = extend({
                to: req.body.rcpt, // list of receivers
                subject: req.body.subject, // Subject line
                html: source // html body
            }, config.emailOptions);

            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                    res.status(500).send('Error: '+error);
                    res.write('ERR');
                } else {
                    console.log('Message sent: ' + info.response);
                    res.send('OK: '+info.response);
                }
            });
        }
        
    };

    response(req.body.html);
});


// This is needed with grunt-express-server (while it was not needed with grunt-express)

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../'));

var server = app.listen( PORT, function() {
    var check = gm(100, 100, '#000000');
    check.format(function (err, format) {
        if (err) console.error("ImageMagick failed to run self-check image format detection. Error:", err);
    });
    console.log('Express server listening on port ' + PORT);
} );

// module.exports = app;
