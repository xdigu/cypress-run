const { defineConfig } = require("cypress");

const baseUrl = process.env.BASE_URL || "http://localhost:3000/";

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: baseUrl,
  },
});
