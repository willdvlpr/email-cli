class EmailManager {
  constructor() {
    this.emailAddress = "";
  }

  setEmailAddress(emailAddress) {
    this.emailAddress = emailAddress;
    return emailAddress;
  }
}

module.exports = EmailManager;
