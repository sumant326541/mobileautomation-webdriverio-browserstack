const { $ } = require('@wdio/globals')

class SignUpPage {

    get signUpTab() {
        const androidSelector = `//android.widget.TextView[@text="Sign up"]`
        const iosSelector = `name == "Sign up" AND label == "Sign up" AND value == "Sign up"`
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
    get inputConfirmPassword() {
        const androidSelector = `~input-repeat-password`
        const iosSelector = `~input-repeat-password`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get btnSignUp() {
        const androidSelector = `//android.view.ViewGroup[@content-desc="button-SIGN UP"]/android.view.ViewGroup`
        const iosSelector = `~button-SIGN UP`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get msgSuccessSignUp() {
        const androidSelector = `//android.widget.TextView[@resource-id="android:id/message"]`
        const iosSelector = `name == "You successfully signed up!"`
        const selector = driver.isAndroid ? androidSelector : `-ios predicate string:${iosSelector}`
        return $(selector);
    }

    async tapOnSignUpTab() {
        await this.signUpTab.click();
    }

    async signUp(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.inputConfirmPassword.setValue(password);
        await this.btnSignUp.click();
    }

}
module.exports = new SignUpPage();
