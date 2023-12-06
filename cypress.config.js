const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { defineConfig } = require('cypress');

module.exports = defineConfig({
    modifyObstructiveCode: true,
    e2e: {
        setupNodeEvents(on, config) {
            config.baseUrl = 'https://demoqa.com';
            allureWriter(on, config);
            return config;
        },
        env: {
            allure: true
        }
    }
});