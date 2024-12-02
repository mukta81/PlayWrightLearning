import { DatabaseConnection } from "./DatabaseConnection.js";

class Concrete implements DatabaseConnection{
  connect():void{
   console.log("Method Connect from Interface");
  }
  disconnect():void{
    console.log("Method disconnect from Interface");
  }
  executeUpdate():void{
    console.log("Method executeUpdate from Interface");
  }


}

const concreteObj = new Concrete();
concreteObj.connect();
concreteObj.disconnect();
concreteObj.executeUpdate();