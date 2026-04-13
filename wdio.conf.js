exports.config = {
    runner: 'local',
    specs: ['./test/specs/**/*.js'],
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome'
    }],
    logLevel: 'info',
    framework: 'mocha',
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
};