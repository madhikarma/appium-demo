const { expect } = require('@wdio/globals')
// const LoginPage = require('../pageobjects/login.page')
// const SecurePage = require('../pageobjects/secure.page')
// const SystemPage = require("../pageobjects/system.page");
// const HomePage = require("../pageobjects/home.page");

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveText(
//             expect.stringContaining('You logged into a secure area!'))
//     })
// })

const SystemPage = require("../pageobjects/system.page");
const HomePage = require("../pageobjects/home.page");
const LoginPage = require("../pageobjects/login.page");
const SignUpPage = require("../pageobjects/sign-up.page");

describe("test suite for registration and login flow", () => {
  before(async () => {
    await SystemPage.restartApp();
  });

  it("should login to the created account", async () => {
      await HomePage.openLoginMenu();
    //   await LoginPage.openSignUpMenu();
    //   await SignUpPage.createAccount("userAppium@test.com", "test123!"); // user data is hardcoded, but it is just a simple example, feel free to use other approaches: utilities, .env, etc.
    //   await SignUpPage.openLoginMenu();
    //   await LoginPage.loginToUserAccount("userAppium@test.com", "test123!"); // here you can also use non hardcoded approach!
    //   const successMessage = "~You are logged in!";
    //   await expect($(`${successMessage}`)).toBeDisplayed(); // we verify that success message popup is appeared
    });
})
