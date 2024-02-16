const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const HomePage = require('../pageobjects/home.page')
const LoginPage = require('../pageobjects/login.page');


const pages = {
    home: HomePage,
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await expect(pages[page].navigationbarHome).toBeExisting();
});

When(`I tap on login navigationbar`, async () => {
    await pages.home.tapOnLoginNavigationBar()
});

Then(`I should see login Page`, async () => {
    await expect(pages.login.tabLogin).toBeExisting();
});

When(/^I login with (.+) and (.+)$/, async (username, password) => {
    await pages.login.loginToApp(username, password)
});

Then(/^I should see successful login (.*)$/, async (message) => {
    await expect(pages.login.msgSuccessLogin).toBeExisting();
    await expect(pages.login.msgSuccessLogin).toHaveText(message);
});
