module.exports = function() {
  $.gulp.task('sass-prod', function() {
    return $.gulp.src('./src/sass/main.scss')
    .pipe($.gp.sass())
    .on('error', $.gp.notify.onError({
      title: 'Style'
    }))
    .pipe($.gp.autoprefixer({
      browsers: $.config.autoprefixerConfig
    }))
    .pipe($.gp.cleanCss({compatibility: 'ie8'}))
    .pipe($.gulp.dest($.config.root + '/css'))
    .pipe($.browserSync.stream())
  });
};
