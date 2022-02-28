import utils from "../utils/utils"

class ContactPage {
    get drpdownSubjectHeading() {
      return $("#id_contact");
    }
  
    get inputEmailAddress() {
      return $("#email");
    }
  
    get dropdownOrderReference() {
      return $(".selector span+select[name='id_order']");
    }
  
    get btnSubmit() {
      return $("#submitMessage");
    }
  
    get inputMessage() {
      return $("#message");
    }
  
    //Actions
  
    sendMessageToCustomerCare = async () => {
      await this.drpdownSubjectHeading.selectByVisibleText("Customer service");
  
      await expect(await this.inputEmailAddress.getValue()).toEqual(
        utils.staticData.email
      );
  
      await this.dropdownOrderReference.selectByIndex(1);
  
      await this.inputMessage.setValue(
        "Hi There,\n" +
        "I got some issue with my product which i bought yesterday.Can you please help me with refund the amount!\n" +
        "Thanks"
      );
  
      await this.btnSubmit.click();
    };

    // verify contact us
    verifyPageHeadingContactUs = async (title) => {
        await browser.waitUntil(
          async () => (await $("//h1[contains(text(), 'Customer service - Contact us')]").getText()) === title,
          {
            timeout: 10000,
            timeoutMsg: "expected text is different after 10s",
          }
        );
        const headingTitle = await $("//h1[contains(text(), 'Customer service - Contact us')]");
        expect(await headingTitle.getText()).toEqual(title);
      };
    
  }
  
  export default new ContactPage();