const { override, useBabelRc } = require("customize-cra");
const path = require("path");

module.exports =
  // eslint-disable-next-line react-hooks/rules-of-hooks
  override( useBabelRc());
  // enable legacy decorators babel plugin
