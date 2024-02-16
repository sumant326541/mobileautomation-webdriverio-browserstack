const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const HomePage = require('../pageobjects/home.page')
const LoginPage = require('../pageobjects/login.page');
const SignPage = require('../pageobjects/signup.page')

const pages = {
    home: HomePage,
    login: LoginPage,
    signup: SignPage
}

When(`I tap on Sign Up tab`, async () => {
    pages.signup.tapOnSignUpTab()
});

Then(`Sign Up page should display`, async () => {
    await expect(pages.signup.btnSignUp).toBeExisting();
});

When(/^I sign up with (.+) and (.+)$/, async (username, password) => {
    await pages.signup.signUp(username, password)
});

Then(/^I should see successful sign Up (.+)$/, async (message) => {
    await expect(pages.signup.msgSuccessSignUp).toBeExisting();
    await expect(pages.login.msgSuccessLogin).toHaveText(message);
});