# Setup Project Details

----

## New Dev Environment Config

- [Install yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)
- [Install VSCode](https://code.visualstudio.com/Download)
- Install **ALL** the extensions recommended in `.vscode/extensions.json`
  - A popup will appear when you start the VSCode, just click at "Accept" and all the extensions will be automatically installed
- **If the changes are not applied automatically** add the content of `.vscode/settings.json` in your personal settings.json
  - The "Material Icon Theme" settings aren't automatically configured, so you need to set they manually

----

## New Project Config

### Initial config

- [ ] Run `yarn husky:config` to automatically config husky
- [ ] Change the project name on `package.json`
- [ ] Configure the `serverless.yml` file
- [ ] Add project to [CodeFactor](https://www.codefactor.io/)
- [ ] Add project to [DeepScan](https://deepscan.io/dashboard/#view=team&tid=13883)
- [ ] Add project to [Coveralls](https://coveralls.io/welcome)

### After the first test file be added to the project

- [ ] Remove "Test TypeScript Syntax" step from `.github/workflows/tests.yml`
- [ ] Remove script "temp:test-tsc" from `package.json`
- [ ] Uncomment steps "Run Tests" and "Collect Coverage" from `.github/workflows/tests.yml`
- [ ] Uncomment "coverageThreshold" from `jest.config.js`

### After all other steps are completed

- [ ] Delete this file
