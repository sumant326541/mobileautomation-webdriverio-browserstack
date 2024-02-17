<img width="100" alt="Screenshot 2021-06-29 at 8 12 27 AM" src="https://user-images.githubusercontent.com/39675511/123728969-d2a87b00-d8b1-11eb-9ece-558d4021f816.png">

# mobile automation for android and ios app with browserstack and emulator/simulator

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Reports](#reports)


## Prerequisites

- Ensure Node.js and npm are installed on your machine.
- appium inspector - For inspecting new elements, utilize Appium Inspector.
- appium (only for local execution) - For local execution install it from package.json or through below command
```sh
npm install appium -g
```
- xcuitest - To enable execution on ios simulator install XCUITest driver using either the package.json or the command 
```sh
npm install appium-xcuitest-driver
```
- uiautomator2 - To enable execution on android simulator using either the package.json or the command 
```sh
npm install uiautomator2
```
- simulator(for ioS) - For iOS testing on simulators, configure Xcode for launching the iOS simulator.
- emulator (for android) - For Android testing on emulators, configure Android SDK, ADB, and AVD Manager for launching Android emulators.
- Visual Studio Code - When writing code, use a code editor, with Visual Studio Code being the preferred choice.
- BrwserStack Account -  If running tests on BrowserStack's provided cloud devices, ensure you have a BrowserStack account.
- wdiodemoapp.apk - need to set app path in conf.json (support both emulator and real device)download from https://github.com/webdriverio/native-demo-app/releases 
- wdiodemoapp.app - need to set app path in conf.json (support only simulator )download from https://github.com/webdriverio/native-demo-app/releases 


## Installation

Clone the repository:

```sh
https://github.com/sumant326541/mobileautomation-webdriverio-browserstack.git
```
install dependencies mentioned in package.json

```sh
npm install
```

## Running Tests
### Android
 - Run tests on browserstack
    ```js
    npm run wdio:android
    ```
- Run tests on emulator
    ```js
    npm run wdio:android:emulator
    ```
 ### iOS
 - Run tests on browserstack (no support for wdiodemo app on real device but it will work for supported app)
    ```js
    npm run wdio:iOS
    ```
- Run tests on emulator
    ```js
    npm run wdio:iOS:simulator
    ```
## Reports
- Intigrated with allure report
- An HTML report will be generated in the report folder. 

 ```js
npm run wdio:report
``` 
