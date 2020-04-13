# web-onefx-boilerplate-js

A JavaScript and FlowType version of https://github.com/puncsky/web-onefx-boilerplate.

### Run your project

This is intended for \*nix users. If you use Windows, go to [Run on Windows](#run-on-windows). Let's first prepare the environment.

```bash
cd my-awesome-project

nvm use 12.16.1
npm install

# prepare environment variable
cp ./.env.tmpl ./.env
```

#### Development mode

To run your project in development mode, run:

```bash
npm run watch
```

The development site will be available at [http://localhost:5000](http://localhost:5000).

#### Production Mode

It's sometimes useful to run a project in production mode, for example, to check bundle size or to debug a production-only issue. To run your project in production mode locally, run:

```bash
npm run build-production
NODE_ENV=production npm run start
```

#### NPM scripts

- `npm run test`: test the whole project and generate a test coverage
- `npm run ava ./path/to/test-file.js`: run a specific test file
- `npm run build`: build source code from `src` to `dist`
- `npm run lint`: run the linter
- `npm run kill`: kill the node server occupying the port 5000.
