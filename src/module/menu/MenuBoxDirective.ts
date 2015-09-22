/// <reference path="../../../vendor/typings/angularjs/angular.d.ts" />
/// <reference path="../../../vendor/typings/angularjs/angular-animate.d.ts" />
/// <reference path="../../../vendor/typings/angularjs/angular-cookies.d.ts" />
/// <reference path="../../../vendor/typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../../vendor/typings/angularjs/angular-sanitize.d.ts" />
/// <reference path="../../../vendor/typings/angular-translate/angular-translate.d.ts" />
/// <reference path="../../../vendor/typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../../vendor/typings/toastr/toastr.d.ts" />

import {directive} from "../../decorators/directive";
import * as ng from "angular";

@directive()
export class MenuBoxDirective implements ng.IDirective {

  public templateUrl:string = "src/module/menu/view/menu.html";

  public restrict:string = "EA";

  public scope:Object = {
    story: "="
  };

  public link:Function = (scope:ng.IScope, element:ng.IAugmentedJQuery, attrs:ng.IAttributes):void => {
    return null;
  };

  constructor(private $location:ng.IRootScopeService, private $rootScope:ng.IScope) {
  }

  public testFunction($a:any, b:ng.IScope):number {
    return 1;
  }
}
