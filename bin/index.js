#!/usr/bin/env node
const program = require("commander");
const pkg = require("../package.json");

program
  .version(pkg.version)
  .command("send", "Send Email")
  .command("read", "Read Emails")
  .parse(process.argv);
