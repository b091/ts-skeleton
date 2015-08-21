import {Story} from './StoryService';

export class StoryBoxDirectiveCtrl {

  public title:string = 'My Directive Controller';
  private story:Story;

  constructor(private $scope:any) {
    this.story = this.$scope.story;
  }

}
