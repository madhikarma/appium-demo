const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
// class LoginPage extends Page {
//     /**
//      * define selectors using getter methods
//      */
//     get inputUsername () {
//         return $('#username');
//     }

//     get inputPassword () {
//         return $('#password');
//     }

//     get btnSubmit () {
//         return $('button[type="submit"]');
//     }

//     /**
//      * a method to encapsule automation code to interact with the page
//      * e.g. to login using username and password
//      */
//     async login (username, password) {
//         await this.inputUsername.setValue(username);
//         await this.inputPassword.setValue(password);
//         await this.btnSubmit.click();
//     }

//     /**
//      * overwrite specific options to adapt it to page object
//      */
//     open () {
//         return super.open('login');
//     }
// }

// module.exports = new LoginPage();

class LoginPage {
  get signUpButton() {
    return $('//XCUIElementTypeStaticText[@name="Sign up"]'); // locator for Sign up button
  }

  get emailField() {
    return $("~input-email"); // locator for email field
  }

  get passwordField() {
    return $("~input-password"); // locator for password field
  }

  get loginButton() {
    return $('(//XCUIElementTypeOther[@name="LOGIN"])[2]'); // locator for login button
  }

  // command to open sign up menu from login menu
  async openSignUpMenu() {
    await this.signUpButton.click();
  }

  // command to add credentials into the email and password fields and click on the login button
  async loginToUserAccount(email, password) {
    await this.emailField.setValue(email); // .setValue() automatically clear the field, so we don't need to use clear command before
    await this.passwordField.setValue(password);
    await this.loginButton.click();
  }
}

module.exports = new LoginPage();
