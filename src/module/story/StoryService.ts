import {EndpointService} from "../../services/EndpointService";
import IPromise = angular.IPromise;

export class StoryService {

  public model:Story[] = [];
  private moduleName:string = "stories";

  // @ngInject
  constructor(private endpointService:EndpointService,
              private $http:ng.IHttpService) {
  }

  public create(storyId:number):IPromise<any> {
    return this.$http
      .post(this.endpointService.getUrlForId(this.moduleName, storyId), {});
  };

  public getAll():IPromise<any> {
    return this.$http
      .get(this.endpointService.getUrl(this.moduleName))
      .then((data:any) => this.handleResponse(data));
  }

  public getById(storyId:number):IPromise<any> {
    return this.$http
      .get(this.endpointService.getUrlForId(this.moduleName, storyId));
  }

  public update(story:Story):IPromise<any> {
    return this.$http
      .put(this.endpointService.getUrlForId(this.moduleName, story.id), story);
  }

  public delete(storyId:number):IPromise<any> {
    return this.$http
      .delete(this.endpointService.getUrlForId(this.moduleName, storyId), {});
  }

  private handleResponse(response:any):any {
    this.setModel(response.data);
    return response;
  }

  private setModel(data:Story[]):void {
    this.model.length = 0;
    Array.prototype.push.apply(this.model, data);
  }

}

export interface Story {
  id:number;
  title:string;
  description:string;
  status:number;
  assignee:number;
  reporter:number;
}
