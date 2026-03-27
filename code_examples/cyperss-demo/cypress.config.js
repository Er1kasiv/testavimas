const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push(
            "--disable-popup-blocking", 
            "--incognito"
            // "--window-size=360,760"
          );
        }
        return launchOptions;
      });
    },
  },
});
