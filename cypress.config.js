const { defineConfig } = require('cypress');

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
    modifyObstructiveCode: true,
    e2e: {
        setupNodeEvents(on, config) {
            config.baseUrl = 'https://demoqa.com';
            allureWriter(on, config);
            return config;
        }
    }
});