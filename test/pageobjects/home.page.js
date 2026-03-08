const { $ } = require('@wdio/globals')
const Page = require('./page');

class HomePage {

  get loginMenu() {
    return $('~Login')
  }

  async openLoginMenu() {
    await this.loginMenu.click()
  }

}

module.exports = new HomePage()