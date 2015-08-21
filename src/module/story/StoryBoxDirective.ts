import {directive} from '../../decorators/directive';
import {Story} from './StoryService';

@directive('$location', '$rootScope')
export class StoryBoxDirective implements ng.IDirective {

  public templateUrl:string = 'src/module/story/view/story-box.html';
  public restrict:string = 'EA';
  public scope:Object = {
    story: '='
  };

  public link:Function = (scope:ng.IScope, element:ng.IAugmentedJQuery, attrs:ng.IAttributes):void => {
    // console.info(scope, element, attrs, this.$location);
    scope.$watch('test', () => {
      return null;
    });
  };

  constructor(private $location:ng.ILocationService, private $rootScope:ng.IScope) {
    // console.log('Dependency injection', $location, $rootScope);
  }

}
