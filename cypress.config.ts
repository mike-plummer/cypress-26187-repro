import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  screenshotOnRunFailure: true,
  defaultCommandTimeout: 250,
  fixturesFolder: false,
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output.xml',
    toConsole: true,
  },
  component: {
    setupNodeEvents: (on, config) => {
      require('@cypress/code-coverage/task')(on, config)
      return config
    },
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },

  e2e: {
    setupNodeEvents: (on, config) => {
      require('@cypress/code-coverage/task')(on, config)
      return config
    },
  },
});
