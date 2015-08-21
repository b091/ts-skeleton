import {StoryBoxDirectiveCtrl} from './StoryBoxDirectiveCtrl';
import {directive} from '../../decorators/directive';

@directive('$location', '$rootScope')
export class StoryBoxDirective {

  public controller:any = StoryBoxDirectiveCtrl;
  public controllerAs:string = 'vm';
  public templateUrl:string = 'src/module/dashboard/view/story-box.html';
  public restrict:string = 'EA';
  public scope:any = {
    story: '='
  };

  constructor(private $location:ng.ILocationService, private $rootScope:ng.IScope) {
    console.log('Dependency injection', $location, $rootScope);
  }

  public link(scope:ng.IScope, element:ng.IAugmentedJQuery, attrs:ng.IAttributes):void {
    console.log('Link', scope, element, attrs, this);
  }
}
