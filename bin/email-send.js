const program = require("commander");
const emailAddress = require("../commands/emailAddress");

program.action(emailAddress.recipients);

program.parse(process.argv);
