const { $ } = require('@wdio/globals')

class HomePage {

    get navigationbarHome() {
        const androidSelector = `//android.widget.TextView[@text="Home"]`
        const iosSelector = `~Home`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get navigationbarLogin() {
        const androidSelector = `//android.widget.TextView[@text="Login"]`
        const iosSelector = `~Login`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }
    async tapOnLoginNavigationBar(){
        await this.navigationbarLogin.click()
    }

}
module.exports = new HomePage();
