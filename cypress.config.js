const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 960,
  viewportWidth: 1400,
  defaultCommandTimeout: 6000,
  video: false,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json"
  },
  retries: {
    openMode: 1,
    runMode: 1
  },

  e2e: {
    baseUrl: "https://webgopros.com/",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    excludeSpecPattern: ["**/1-getting-started, **/2-advanced-examples"],
    experimentalWebKitSupport: true,
    uncaughtException: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
