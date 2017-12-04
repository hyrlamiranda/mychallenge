let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  framework: 'jasmine',

  onPrepare: function() {
    jasmine.getEnv().addReporter(
      new SpecReporter({
        spec: {
          displayStacktrace: true
        }
      })
    );
  },
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  getPageTimeout: 25000,
  specs: ['./olx/*spec.js'],

}
