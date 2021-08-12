const inquirer = require("inquirer");
const colors = require("colors");
const EmailManager = require("../lib/EmailManager");

const emailAddress = {
  async recipients() {
    const emailManager = new EmailManager();

    const input = await inquirer.prompt([
      {
        type: "input",
        name: "recipient",
        message: "enter recipients".green,
      },
      {
        type: "input",
        name: "subject",
        message: "enter email subject".green,
      },
    ]);

    // set input in email manager...
    emailManager.setRecipient(input.recipient);
    emailManager.setSubject(input.subject);

    // print...
    console.log("Confirm Details...".yellow);
    console.log("Recipient: ".grey + emailManager.getRecipient());
    console.log("Subject: ".grey + emailManager.getSubject());

    const confirm = await inquirer.prompt([
      {
        type: "input",
        name: "confirm",
        message: "confirm? (y/n):".green,
      },
    ]);

    if (confirm.confirm === "y") {
      console.log("email sent!".yellow);
      return;
    }

    console.log("cancelled.".red);
  },

  async subject() {
    console.log("subject");
  },

  async read() {
    console.log("Read functionality not available yet.".red);
  },
};

module.exports = emailAddress;
