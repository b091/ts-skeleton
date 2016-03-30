import {FooBar} from "./FooBar";

export class LoginCtrl {

  public title:string = "Login Panel";

  // @ngInject
  constructor(private $filter:ng.IFilterService,
              private $state:ng.ui.IStateService,
              private fooBar:FooBar) {
    console.log("Angular Dependency Injection Example");
    console.log($filter, $state);
  }

  public fooBarTitle(title:string):string {
    const prefix:string = this.fooBar.testMethod();
    return `${prefix}: ${title}`;
  }
}
