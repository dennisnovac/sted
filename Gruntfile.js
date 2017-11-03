"use strict";
var path = require('path');

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.loadTasks('tasks');

  grunt.initConfig({

    combineKOTemplates: {
      main: {
        src: "src/tmpl/*.tmpl.html",
        dest: "build/templates.js"
      }
    },

    jshint: {
      all: [
        'Gruntfile.js',
        'src/**/*.js',
      ],
      options: {
        reporter: require('jshint-stylish'),
        sub: true,
        jshintrc: true,
        browserify: true

      }
    },

    less: {
      options: {
        sourceMap: true,
        sourceMapRootpath: '../',
        /* sourceMapFilename: 'build/stedb.css.map' */
        sourceMapFileInline: true
      },
      css: {
        files: {
          "build/stedb.css": "src/css/app_standalone.less",
          "build/stedb-material.css": "src/css/app_standalone_material.less"
        }
      }
    },

    postcss: {
      options: {
        map: {
          inline: false /* , prev: 'build/app.css.map' */
        },
        diff: false,
        processors: [
          require('autoprefixer')({
            browsers: 'ie 10, last 2 versions'
          }),
          require('csswring')()
        ]
      },
      dist: {
        src: 'build/stedb.css',
        dest: 'dist/stedb.min.css'
      },
      material: {
        src: 'build/stedb-material.css',
        dest: 'dist/stedb-material.min.css'
      }
    },

    browserify: {
      debug: {
        options: {
          browserifyOptions: {
            standalone: 'stedb'
          },
          cacheFile: 'build/debug-incremental.bin',
        },
        files: {
          'build/stedb.js': ['./src/js/app.js', './build/templates.js']
        }
      },
      main: {
        options: {
          browserifyOptions: {
            debug: true,
            fullPaths: false,
            standalone: 'stedb'
          },
          transform: ['uglifyify'],
          cacheFile: 'build/main-incremental.bin',
        },
        files: {
          'build/stedb.debug.js': ['./src/js/app.js', './build/templates.js']
        }
      }
    },

    exorcise: {
      main: {
        options: {
          bundleDest: 'dist/stedb.min.js'
        },
        files: {
          'dist/stedb.min.js.map': ['build/stedb.debug.js'],
        }
      }
    },

    watch: {
      css: {
        files: ['src/css/*.less', 'src/**/*.css'],
        tasks: ['less', 'postcss']
      },
      tmpl: {
        files: ['src/tmpl/*.tmpl.html'],
        tasks: ['combineKOTemplates']
      },
      browserify: {
        files: ['src/js/**/*.js', 'build/templates.js'],
        tasks: ['browserify', 'exorcise']
      },
      exorcise: {
        files: ['build/stedb.debug.js'],
        tasks: ['exorcise']
      },
      web: {
        options: {
          livereload: true
        },
        files: ['*.html', 'dist/**/*.js', 'dist/**/*.css'],
      },
      jshint: {
        files: ['src/js/**/*.js'],
        tasks: ['newer:jshint']
      }
    },

    express: {
      dev: {
        options: {
          script: 'backend/main.js',
          background: true,
          port: 9006,
        }
      }
    },

    copy: {
      res: {
        expand: true,
        cwd: 'res',
        src: '**',
        dest: 'dist/'
      }
    },

    bowercopy: {
      libs: {
        options: {
          destPrefix: 'dist/vendor'
        },
        files: {
          'knockout.js': 'knockout/dist/knockout.js',
          'jquery.min.js': 'jquery/dist/jquery.min.js',
          'jquery.min.map': 'jquery/dist/jquery.min.map',
          'jquery-ui.min.js': 'jquery-ui/jquery-ui.min.js',
          'jquery-ui.min.css': 'jquery-ui/themes/smoothness/jquery-ui.min.css',
          'jquery.ui.touch-punch.min.js': 'jqueryui-touch-punch/jquery.ui.touch-punch.min.js',
          'knockout-jqueryui.min.js': 'knockout-jqueryui/dist/knockout-jqueryui.min.js',
          'canvas-to-blob.min.js': 'blueimp-canvas-to-blob/js/canvas-to-blob.min.js',
          'load-image.all.min.js': 'blueimp-load-image/js/load-image.all.min.js',
          'jquery.iframe-transport.js': 'jquery-file-upload/js/jquery.iframe-transport.js',
          'jquery.fileupload.js': 'jquery-file-upload/js/jquery.fileupload.js',
          'jquery.fileupload-process.js': 'jquery-file-upload/js/jquery.fileupload-process.js',
          'jquery.fileupload-image.js': 'jquery-file-upload/js/jquery.fileupload-image.js',
          'jquery.fileupload-validate.js': 'jquery-file-upload/js/jquery.fileupload-validate.js',
          'tinymce.min.js': 'tinymce/tinymce.min.js',
          'themes': 'tinymce/themes',
          'skins': 'tinymce/skins',
          'plugins': 'tinymce/plugins',
          'popper.js': 'popper.js/dist/umd/popper.js',
          'intl-tel-input': 'intl-tel-input/build',
          'bootstrap-datepicker': 'bootstrap-datepicker/dist',
          'chart.js': 'chart.js/dist'
        }
      },
      fontawesome: {
        options: {
          destPrefix: 'dist/fa'
        },
        files: {
          'fonts/fontawesome-webfont.woff2': 'font-awesome/fonts/fontawesome-webfont.woff2',
          'fonts/fontawesome-webfont.woff': 'font-awesome/fonts/fontawesome-webfont.woff',
          'fonts/fontawesome-webfont.ttf': 'font-awesome/fonts/fontawesome-webfont.ttf',
          'fonts/fontawesome-webfont.svg': 'font-awesome/fonts/fontawesome-webfont.svg',
          'fonts/fontawesome-webfont.eot': 'font-awesome/fonts/fontawesome-webfont.eot'
        }
      }
    },

    jasmine_node: {
      main: {
        options: {
          coverage: {
            reportDir: 'build/coverage',
          },
          forceExit: false,
          match: '.',
          matchAll: false,
          specFolders: ['spec'],
          extensions: 'js',
          specNameMatcher: 'spec',
          captureExceptions: true,
          junitreport: {
            report: false,
            savePath: './build/jasmine/',
            useDotNotation: true,
            consolidate: true
          }
        },
        src: ['src/**/*.js']
      }
    },

  });

  grunt.registerTask('js', ['combineKOTemplates', 'browserify', 'exorcise']);
  grunt.registerTask('css', ['less', 'postcss']);
  grunt.registerTask('server', ['express', 'watch', 'keepalive']);
  grunt.registerTask('build', ['bowercopy', 'copy', 'jshint', 'js', 'css']);
  grunt.registerTask('default', ['build', 'server']);
  grunt.registerTask('test', ['jasmine_node']);
};
