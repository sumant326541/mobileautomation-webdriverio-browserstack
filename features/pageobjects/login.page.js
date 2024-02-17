const { $ } = require('@wdio/globals')

class LoginPage {

    get tabLogin() {
        const androidSelector = `(//android.widget.TextView[@text="Login"])[1]`
        const iosSelector = `name == "Login" AND label == "Login" AND value == "Login"`
        const selector = driver.isAndroid ? androidSelector : `-ios predicate string:${iosSelector}`
        return $(selector);
    }

    get inputUsername() {
        const androidSelector = `~input-email`
        const iosSelector = `~input-email`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get inputPassword() {
        const androidSelector = `~input-password`
        const iosSelector = `~input-password`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get btnLogin() {
        const androidSelector = `//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup`
        const iosSelector = `(//XCUIElementTypeOther[@name="LOGIN"])[2]`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get msgSuccessLogin() {
        const androidSelector = `//android.widget.TextView[@resource-id="android:id/message"]`
        const iosSelector = `name == "You are logged in!"`
        const selector = driver.isAndroid ? androidSelector : `-ios predicate string:${iosSelector}`
        return $(selector);
    }


    async loginToApp(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

}
module.exports = new LoginPage();
