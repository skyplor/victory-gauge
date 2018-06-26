/**
 * Test setup for client-side tests.
 *
 * Intended for:
 * - Karma tests: `npm run test-client`
 * - Browser tests: `http://localhost:3000/test/client/test.html`
 */
/*globals window:false*/
const chai = require("chai");
const sinonChai = require("sinon-chai");
const chaiEnzyme = require("chai-enzyme");
const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

// --------------------------------------------------------------------------
// Chai / Sinon / Mocha configuration.
// --------------------------------------------------------------------------
// Exports
window.expect = chai.expect;

// Plugins
chai.use(sinonChai);
chai.use(chaiEnzyme());

// Mocha (part of static include).
window.mocha.setup({
  ui: "bdd",
  bail: false
});

enzyme.configure({ adapter: new Adapter() });

// --------------------------------------------------------------------------
// Bootstrap
// --------------------------------------------------------------------------
// Use webpack to include all app code _except_ the entry point so we can get
// code coverage in the bundle, whether tested or not.
const srcReq = require.context("src", true, /\.jsx?$/);
srcReq.keys().map(srcReq);

// Use webpack to infer and `require` tests automatically.
const testsReq = require.context(".", true, /\.spec.jsx?$/);
testsReq.keys().map(testsReq);

// Only start mocha in browser.
if (!window.__karma__) {
  window.mocha.run();
}
