var fs = require('fs');
var del = require('del');
var gulp = require('gulp');

// Common pathes
var path = {
  docs: './docs/**/*.*',
  schema: './schema/*.json',
  dest: './www'
};

// Clean output
gulp.task('clean', function () {
  return del([
    path.dest + '/**/*',
  ]);
});

// Copy static files
gulp.task('static', function () {
  return gulp
    .src([path.docs], {base: 'docs'})
    .pipe(gulp.dest(path.dest));
});

// Copy static files
gulp.task('schema', function () {
return gulp
    .src([path.schema], {base: 'schema'})
    .pipe(gulp.dest(path.dest + '/schema'));
});

// Clean output
gulp.task('clean', function () {
    return del([
      path.dest + '/**/*',
    ]);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default',  [
  'static',
  'schema',
]);