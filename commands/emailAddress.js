const inquirer = require("inquirer");
const colors = require("colors");
const EmailManager = require("../lib/EmailManager");

const emailAddress = {
  async set() {
    const emailManager = new EmailManager();
    const totalRecipients = await inquirer.prompt([
      {
        type: "inpit",
        name: "totalRecipients",
        message: "how many recipients?".green,
      },
    ]);

    const input = await inquirer.prompt([
      {
        type: "input",
        name: "email",
        message: "enter recipient".green,
      },
    ]);

    const emailAddress = emailManager.setEmailAddress(input.emailAddress);
  },

  async read() {
    console.log("Read functionality not available yet.".red);
  },
};

module.exports = emailAddress;
