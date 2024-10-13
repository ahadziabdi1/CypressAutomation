const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ermsq2',
  defaultCommandTimeout: 6000,

  reporter: "cypress-mochawesome-reporter",

  projectId: "ermsq2",
  
  env: {
    url: "https://rahulshettyacademy.com",
  },

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    specPattern: "cypress/integration/examples/*.js",
  },
});
