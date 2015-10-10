import {Story, StoryService} from "./../story/StoryService";

export class DashboardCtrl {

  public title:string = "Dashboard";
  public stories:Story[];

  // @ngInject
  constructor(private storyService:StoryService) {
    this.stories = storyService.model;
    storyService.getAll();
  }

}
