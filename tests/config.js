// Karma configuration

basePath = '..';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  REQUIRE,
  REQUIRE_ADAPTER,
  'tests/runner.js',
  { pattern: 'libs/**/*.js', included: false },
  { pattern: 'source/**/*.js', included: false },
  { pattern: 'tests/spec/**/*.js', included: false }
];

reporters = ['progress'];

// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;

// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;
