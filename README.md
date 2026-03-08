# appium-demo
Demo project for using Appium for Automated testing on Mobile (and Web)

## Installation

    npm init -y
    npm install --save-dev appium
    npm install — save-dev @wdio/appium-service

## Configuration

Update wdio.conf.js with capabilities specifiying path to file:

        capabilities: [{
        // capabilities for local Appium web tests on iOS
        platformName: 'iOS',
        browserName: 'Safari',
        'appium:deviceName': 'iPhone 16',
        'appium:platformVersion': '18.2',
        'appium:automationName': 'XCUITest',
        'appium:app': '/Users/shagun/Documents/Developer/workspace/automation/appium-demo/app/wdiodemoapp.app',
        "appium:noReset": false,
        "appium:fullReset": false
    }],

## Usage

1. Start Appium server
    npx appium run

2. Start iOS Simulator

## Commands

    npx appium driver list
    npx appium driver install xcuitest
    xcrun simctl list devices


## Links
- https://medium.com/@arsen02184/how-to-write-your-first-ios-appium-test-from-scratch-83c655b284f5