class SystemPage {
  async restartApp() {
    await driver.terminateApp("org.wdiodemoapp");
    await driver.activateApp("org.wdiodemoapp");
  }
}

module.exports = new SystemPage();