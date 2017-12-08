### Live version 

[stedb-live](https://stedb-live.herokuapp.com/)

### More info here

[Wiki](https://github.com/dennisnovac/sted/wiki/Intro)

### Build/Run

You need NodeJS v6.0 or higher + ImageMagick

this may raise warnings about Knockout, ignore them. It will probably fail on some colorpicker dependency, just run it again and will work:
```
  npm install
```
if you don't have it, install grunt-cli globally
```
  npm install -g grunt-cli
```
compile and run a local webserver (http://127.0.0.1:9006) with incremental build and livereload
```
  grunt
```
*IMPORTANT* in order to use image uploading/processing feature in Node you need imageMagick installed in your environment.
e.g. running "convert" and "identify" on the command line should output imageMagick command line help (if you are on Windows and install imageMagick 7.x then make sure to install ["legacy utilities"](https://github.com/aheckmann/gm/issues/559)).
