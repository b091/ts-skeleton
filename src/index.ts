import {App} from "./App";

import "./module/toast/Toast";
import "./module/dashboard/Dashboard";
import "./module/menu/Menu";
import "./module/auth/Auth";
import "./services/EndpointService";

App.element(document).ready(() => {
  App.bootstrap(document, [
    "app",
    "app.dashboard",
    "app.auth",
    "app.toast",
    "app.services",
    "app.menu"
  ]);
});
//
//
//import "./imports/Reflect";
//
//export function directive(...values:string[]):any {
//  console.log("1", values);
//  return (target:Function, key:String) => {
//    console.log("2", target, key);
//  };
//}
//
//@directive
//export class MenuBoxDirective implements ng.IDirective {
//
//  public templateUrl:string = "src/module/menu/view/menu.html";
//
//  public restrict:string = "EA";
//
//  public scope:Object = {
//    story: "="
//  };
//
//  public link:Function = (scope:ng.IScope, element:ng.IAugmentedJQuery, attrs:ng.IAttributes):void => {
//    return null;
//  };
//
//  constructor(private $location:"String", private $rootScope:ng.IScope) {
//  }
//
//  public testFunction($a:any, b:ng.IScope):number {
//    return 1;
//  }
//}
//
//class AAA {
//  public name:string = "klasa A";
//}
//
//class BBB {
//  public name:string = "klasa B";
//}
//
//@directive
//class CCC {
//  public name:string = "klasa B";
//
//  constructor(public aa:AAA, public bb:BBB) {
//    console.log("wlazlo");
//  }
//}
//
//new CCC(new AAA(), new BBB());
//
//new MenuBoxDirective(new AAA());
