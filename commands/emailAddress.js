const inquirer = require("inquirer");
const colors = require("colors");
const EmailManager = require("../lib/EmailManager");

const emailAddress = {
  async set() {
    const emailManager = new EmailManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "email",
        message: "Enter email address".green,
      },
    ]);

    const emailAddress = emailManager.setEmailAddress(input.emailAddress);
  },
};

module.exports = emailAddress;
