const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './e2e-tests',
  
  webServer: {
  command: 'npm start',
  port: 8080,
  },

  use: {
    baseURL: 'http://localhost:8080',
  },
})