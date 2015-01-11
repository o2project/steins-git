/* jshint node: true */
"use strict";

var gulp = require("gulp");
var $ = require("gulp-load-plugins")();

var del = require("del");
var fs = require("fs");
var path = require("path");
var exec = require("child_process").exec;
var vinylPaths = require('vinyl-paths');
var browserSync = require("browser-sync");
var reload = browserSync.reload;

//////////////////////////////////////////////////

gulp.task("md2re", function() {
  var destDirName = "build/";
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

//////////////////////////////////////////////////

gulp.task("re2html", function() {
  return exec("bundle exec review-compile --footnotetext --chapterlink --target=html --all",
    function(error, stdout, stderr) {
      if (!error) {
        return;
      }

      console.error(error);
    }
  );
});

//////////////////////////////////////////////////

gulp.task("copy:html", function() {
  var destDirName = "build/";
  var dir = path.join(__dirname, destDirName);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  return gulp.src("./*.html")
    .pipe($.copy(destDirName));
});

//////////////////////////////////////////////////

gulp.task("del:html", function() {
  return gulp.src("./*.html")
    .pipe(vinylPaths(del));
});

//////////////////////////////////////////////////

gulp.task("test", function(cb) {
  var textlintCmd = "./node_modules/.bin/textlint --rulesdir ./node_modules/spellcheck-tech-word-textlint-rule source/Ch*/*.md";

  exec(textlintCmd, function(err, stdout, stderr) {
    console.log(stdout);
    cb(err);
  });
});

//////////////////////////////////////////////////

gulp.task("serve", function() {
  browserSync({
    notify: false,
    server: "./dist/"
  });

  gulp.watch([""], ["", reload]);
});
