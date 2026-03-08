# appium-demo
Demo project for using Appium for Automated testing on Mobile (and Web)

## Environment

- macOS Tahoe 26.3
- nodeJS v24
- Xcode 26

## Installation

Run the following from the root

    npm init -y

Optional - Download and install Appium Inspector

https://github.com/appium/appium-inspector/releases

## Configuration

Update `wdio.conf.js` with capabilities specifiying path to precompiled demo app:

        capabilities: [{
        // capabilities for local Appium web tests on iOS
        platformName: 'iOS',
        'appium:deviceName': 'iPhone 16',
        'appium:platformVersion': '18.2',
        'appium:automationName': 'XCUITest',
        'appium:app': '/Users/shagun/Documents/Developer/workspace/automation/appium-demo/app/wdiodemoapp.app',
        "appium:noReset": false,
        "appium:fullReset": false
    }],


Optional - Open Appium Inspector app and ensure settings from `xcrun simctl list devices` are configured for the booted simulator (see tutorial in links)

## Usage

1. Start Appium server

    `npx appium run`

2. Start iOS Simulator

3. (optional) Start Appium Inspector and Start Session (ensure all settings are configured )

4. Run tests

    `npx run wdio`

## Demo

![appium](demo/appium.gif)

## Commands

    npx appium
    npm run wdio
    npx appium driver list
    npx appium driver install xcuitest
    xcrun simctl list devices


## Links
- https://medium.com/@arsen02184/how-to-write-your-first-ios-appium-test-from-scratch-83c655b284f5