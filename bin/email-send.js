const program = require("commander");
const emailAddress = require("../commands/emailAddress");

program.action(emailAddress.set);

program.parse(process.argv);
