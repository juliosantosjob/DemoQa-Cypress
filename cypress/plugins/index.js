/**
 * @type {Cypress.PluginConfig}
 */

const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { rmdir } = require('fs');
const fs = require('fs');

module.exports = (on, config) => {
    on('task', {
        deleteFolder(path) {
            if (fs.existsSync(path)) {
                return new Promise((resolve, reject) => {
                    rmdir(path, { recursive: true }, (err) => {
                        if (err) {
                            return reject(err);;
                        }
                        resolve(null);
                    });
                });
            }
            return null;
        }
    });

    allureWriter(on, config);
    return config;
};