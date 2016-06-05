/// <binding BeforeBuild='default' />
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var paths = {
    sass: ['./scss/**/*.scss'],
    tsc: ['./app/**/*.ts']
};

gulp.task('default', ['sass','tsc']);

gulp.task('sass', function (done) {
    gulp.src('./scss/ionic.app.scss')
      .pipe(sass())
      .on('error', sass.logError)
      .pipe(gulp.dest('./www/css/'))
      .pipe(minifyCss({
          keepSpecialComments: 0
      }))
      .pipe(rename({ extname: '.min.css' }))
      .pipe(gulp.dest('./www/css/'))
      .on('end', done);
});

// Run gulp watch in conjunction with Ionic serve to 
// reflect live changes to TypeScript files in app directory
gulp.task('watch', function () {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.tsc, ['tsc']);
});

// Run gulp tsc to transpile your TypeScript files from
// app directory to www/js directory
gulp.task('tsc', function () {
    var sourcemaps = require("gulp-sourcemaps");
    var ts = require('gulp-typescript');
    var tsProject = ts.createProject('tsconfig.json');
    return tsProject
    .src('app')
    .pipe(sourcemaps.init())
		.pipe(ts(tsProject))
    .js
    .pipe(sourcemaps.write('./',
      {
          includeContent: true,
          sourceRoot: function (file) {
              return file.cwd + '\\js';
          }
      }))
	  .pipe(gulp.dest('www/js/'));
});