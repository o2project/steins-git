/* jshint node: true */
"use strict";

var gulp = require("gulp");
var $ = require("gulp-load-plugins")();

var fs = require("fs");
var path = require("path");
var exec = require("child_process").exec;
var browserSync = require("browser-sync");
var reload = browserSync.reload;

gulp.task("md2re", function() {
  var destDirName = "build/review/";
  var dir = path.join(__dirname, destDirName);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  // Markdown から Re:VIEW に変換したファイルを ./build/review/ 以下に出力する
  var ary = [0, 1, 2, 3, 4];
  ary.forEach(function(a) {
    var srcDir = "source/Ch" + a + "_*/*.md";
    var destDir = destDirName + "ch" + a + ".re";

    return exec("bundle exec md2review " + srcDir + ">" + destDir,
      function(error, stdout, stderr) {
        if (!error) {
          return;
        }

        console.error(error);
      }
    );
  });
});

gulp.task("test", function() {
});

gulp.task("serve", function() {
  browserSync({
    notify: false,
    server: "./preview/"
  });

  gulp.watch([""], ["", reload]);
});
