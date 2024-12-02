import { BasePage } from "./OverridingBasePage";

class LoginPage extends BasePage{
  performCommonTasks(){
    console.log("Function performCommonTasks() overridden from LoginPage SubClass");
  }

  clickSubmit(){
    console.log("Function clickSubmit() from LoginPage SubClass");
  }
  
}

// const basePage = new BasePage();
// basePage.performCommonTasks();

const loginPage = new LoginPage();
loginPage.performCommonTasks();