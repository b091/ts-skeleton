import {Story, StoryService} from './StoryService';

export class DashboardCtrl {

  public title:string = 'Dashboard';
  public stories:Story[];

  constructor(private toastr:Toastr, private storyService:StoryService) {
    toastr.success('Salute!', 'Toastr fun!');
    this.stories = storyService.model;
    storyService.getAll();
  }

}
