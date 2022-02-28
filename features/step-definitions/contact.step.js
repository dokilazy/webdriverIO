import { Given, When, Then } from "@cucumber/cucumber";
import homePage from "../pageobjects/home.page";
import commonPage from "../pageobjects/common.page";
import contractPage from "../pageobjects/contact.page";

Given(/^I am on the contact page$/, async () => {
  await expect(homePage.linkContact).toBePresent();
  await homePage.linkContact.click();
  await contractPage.verifyPageHeadingContactUs("CUSTOMER SERVICE - CONTACT US");
});

Then(/^I send refund request to customer care for prev order$/, async () => {
  await contractPage.sendMessageToCustomerCare();
});