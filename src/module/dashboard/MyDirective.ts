import {MyDirectiveCtrl} from './MyDirectiveCtrl';
import {directive} from '../../decorators/directive';

@directive('$location', '$rootScope')
export class MyDirective {

  public controller:any = MyDirectiveCtrl;
  public controllerAs:string = 'vm';
  public templateUrl:string = 'src/module/dashboard/view/myDirective.html';
  public restrict:string = 'EA';
  public scope:any = {
    code: '='
  };

  constructor(private $location:ng.ILocationService, private $rootScope:ng.IScope) {
    console.log('Dependency injection', $location, $rootScope);
  }

  public link(scope:ng.IScope, element:ng.IAugmentedJQuery, attrs:ng.IAttributes):void {
    console.log('Link', scope, element, attrs, this);
  }
}
