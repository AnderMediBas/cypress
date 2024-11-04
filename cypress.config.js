const { defineConfig } = require("cypress");

module.exports = defineConfig({
  downloadsFolder:'cypress/d2',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
