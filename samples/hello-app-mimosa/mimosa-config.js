exports.config = {
  "modules": [
    "copy",
    "jshint",
    "csslint",
    "require",
    "minify-js",
    "minify-css",
    "bower",
    "handlebars"
  ],
  "server": {
    "views": {
      "compileWith": "html",
      "extension": "html"
    }
  }
}