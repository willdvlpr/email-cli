const program = require("commander");
const emailAddress = require("../commands/emailAddress");

program
  .command("set")
  .description("Set Email Address")
  .action(emailAddress.set);

program.parse(process.argv);
