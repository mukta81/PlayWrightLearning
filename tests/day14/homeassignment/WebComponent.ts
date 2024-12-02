export class WebComponent{
  selector:string
constructor(selector:string){
  this.selector=selector;
}

click():void{
  console.log(`Function click() from WebComponent Class with selector as "${this.selector}"`)
}

focus():void{
  console.log(`Function focus() from WebComponent Class with selector as "${this.selector}"`)
}

}

class Button extends WebComponent{

  click():void{
    console.log("Function click() overridden from Button Class(extended class)")
  }
}

class TextInput extends WebComponent{
  value:string="";
  
  
  enterText(text:string){
  this.value=text
  console.log(`Value set for "value" parameter is ${this.value}`)
  }
}

function testComponents(){
  const buttonObj = new Button("text");
  const textObj = new TextInput("button");

  buttonObj.click();
  textObj.enterText("Mukta");

  const webCompObj = new WebComponent("text");
  webCompObj.click();
}

testComponents();