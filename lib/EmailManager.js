class EmailManager {
  constructor() {
    this.recipient = "";
    this.subject = "";
  }

  // setters...
  setRecipient(email) {
    this.recipient = email;
  }

  setSubject(subject) {
    this.subject = subject;
  }

  //getters...
  getRecipient() {
    return this.recipient;
  }

  getSubject() {
    return this.subject;
  }
}

module.exports = EmailManager;
