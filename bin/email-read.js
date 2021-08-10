const program = require("commander");
const emailAddress = require("../commands/emailAddress");

program.action(emailAddress.read);

program.parse(process.argv);
