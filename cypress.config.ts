import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  screenshotOnRunFailure: true,
  defaultCommandTimeout: 250,
  fixturesFolder: false,
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
