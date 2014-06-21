// Karma configuration
// Generated on Tue Nov 19 2013 23:00:06 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine'],

    // Without this, Karma will not serve HTML files :-\
    preprocessors: null,

    /**
     * Don't include Polymer HTML and JS because Polymer is very
     * particular about the order in which they are added. Serve them,
     * but defer loading to the test setup. Include test HTML
     * fixtures.
     */
    // list of files / patterns to load in the browser
    files: [
      'test/PolymerSetup.js',
      {pattern: 'apply-author-styles.html', included: false, served: true},
      {pattern: 'apply_author_styles.js', included: false, served: true},
      {pattern: 'bower_components/**', included: false, served: true},
      'test/**/*Spec.js',
      {pattern: 'test/*.html', included: false, served: true}
    ],

    proxies: {
      '/core-ajax/': 'http://localhost:8080/base/bower_components/core-ajax/'
    },

    // list of files to exclude
    exclude: [

    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
