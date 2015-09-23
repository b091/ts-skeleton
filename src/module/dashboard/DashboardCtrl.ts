import {Story, StoryService} from "./../story/StoryService";

export class DashboardCtrl {

  public title:string = "Dashboard";
  public stories:Story[];

  // @ngInject
  constructor(private toastr:Toastr, private storyService:StoryService) {
    toastr.success("Salute!", "Toastr fun!");
    this.stories = storyService.model;
    storyService.getAll();
  }

}
