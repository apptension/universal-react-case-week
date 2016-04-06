var gulp = require('gulp');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');

var tasks = require('apptension-tools/gulp')({
  domain: 'localhost',
  webpackDevServer: {
    historyApiFallback: true,
    proxy: {
      '*': {
        target: 'http://localhost:5000'
      }
    }
  }
});
var env = tasks.env;

gulp.task('webpack', tasks.webpack(false));
gulp.task('webpack:watch', tasks.webpack(true));

gulp.task('serverWebpack', tasks.serverWebpack(false));
gulp.task('serverWebpack:watch', tasks.serverWebpack(true));

gulp.task('clean', tasks.clean);

gulp.task('browser-sync', tasks.browserSync);

gulp.task('serve', function (callback) {
  env.set(env.DEVELOPMENT);
  runSequence(
    'clean',
    ['webpack:watch', 'serverWebpack:watch'],
    'browser-sync',
    callback
  );
});

gulp.task('serve:dist', function (callback) {
  runSequence(
    'default',
    'browser-sync',
    callback
  );
});

gulp.task('default', function (callback) {
  env.set(env.PRODUCTION);
  runSequence(
    'clean',
    'webpack',
    'serverWebpack',
    callback
  );
});
