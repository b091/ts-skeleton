import {directive} from "../../decorators/directive";

@directive("$location", "$rootScope")
export class MenuBoxDirective implements ng.IDirective {

  public templateUrl:string = "src/module/menu/view/menu.html";
  public restrict:string = "EA";
  public scope:Object = {
    story: "="
  };

  public link:Function = (scope:ng.IScope, element:ng.IAugmentedJQuery, attrs:ng.IAttributes):void => {
    return null;
  };

  // @ngInject
  constructor(private $location:ng.ILocationService, private $rootScope:ng.IScope) {

  }

}
