class SignUpPage {
  get emailField() {
    return $("~input-email"); // locator for email field
  }

  get passwordField() {
    return $("~input-password"); // locator for password field
  }

  get confirmPasswordField() {
    return $("~input-repeat-password"); // locator for confirm password field
  }

  get signUpButton() {
    return $('(//XCUIElementTypeOther[@name="SIGN UP"])[2]'); // locator for Sign up button
  }
  
  get signedUpPopUpConfirmButton() {
    return $("~OK"); // locator for "OK" button in the Confirmation popup
  }

  // command to add credentials into the email, password and confirm passord fields, click on the login button and click on OK in the confirmation popup
  async createAccount(email, password) {
    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);
    await this.confirmPasswordField.setValue(password);
    await this.signUpButton.click();
    await this.signedUpPopUpConfirmButton.waitForDisplayed({ timeout: 5000 });
    await this.signedUpPopUpConfirmButton.click();
  }
  
  // go to the Login menu from Sign up menu
  async openLoginMenu() {
    await this.loginMenuButton.click();
  }
}

module.exports = new SignUpPage();
