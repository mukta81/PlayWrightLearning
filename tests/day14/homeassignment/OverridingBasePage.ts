export class BasePage{

  findElement(){
    console.log("Function findElement() from BasePage Parent Class");
  }
  clickElement(){
    console.log("Function clickElement() from BasePage Parent Class");
  }
  enterText(){
    console.log("Function enterText() from BasePage Parent Class");
  }
  performCommonTasks(){
    console.log("Function performCommonTasks() from BasePage Parent Class");
  }
}

const basePage = new BasePage();
basePage.performCommonTasks();
basePage.enterText()