class HomePage {

  get loginMenu() {
    return $('~Login')
  }

  async openLoginMenu() {
    await this.loginMenu.click()
  }

}

module.exports = new HomePage()