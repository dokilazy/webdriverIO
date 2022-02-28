class HomePage {
    // WebElement Locators
    get btnSignIn() {
      return $(".login");
    }
  
    get btnSignOut() {
      return $(".logout");
    }
  
    get txtSignedUserName() {
      return $(".header_user_info .account");
    }
  
    get linkContact() {
      return $("#contact-link");
    }
  
    get imgLogo() {
      return $(".logo.img-responsive");
    }
  
    // Actions
  
    async navigateToLoginPage() {
      await this.btnSignIn.click();
      console.log("Sign In Button Is Clicked");
    }
  }
  export default new HomePage();