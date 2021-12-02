const gulp = require('gulp');
const postcss = require('gulp-postcss');
const tailwind = require('tailwind');

gulp.task('css', () => {
  const processors = [
    tailwind,
  ];

  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist'));
});
