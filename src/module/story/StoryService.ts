import {EndpointService} from "../../services/EndpointService";

export class StoryService {

  public model:Story[] = [];
  private moduleName:string = "stories";

  // @ngInject
  constructor(private endpointService:EndpointService, private $http:ng.IHttpService) {
  }

  public create(storyId:number):ng.IHttpPromise<any> {
    return this.handleResponse(
      this.$http.post(this.endpointService.getUrlForId(this.moduleName, storyId), {}), // story
      "create"
    );
  };

  public getAll():ng.IHttpPromise<any> {
    return this.handleResponse(
      this.$http.get(this.endpointService.getUrl(this.moduleName)),
      "getAll"
    );
  }

  public getById(storyId:number):ng.IHttpPromise<any> {
    return this.handleResponse(
      this.$http.get(this.endpointService.getUrlForId(this.moduleName, storyId)),
      "getById"
    );
  }

  public update(story:Story):ng.IHttpPromise<any> {
    return this.handleResponse(
      this.$http.put(this.endpointService.getUrlForId(this.moduleName, story.id), story),
      "update"
    );
  }

  public delete(storyId:number):ng.IHttpPromise<any> {
    return this.handleResponse(
      this.$http.delete(this.endpointService.getUrlForId(this.moduleName, storyId), {}), // story
      "delete"
    );
  }

  public handleResponse(promise:ng.IHttpPromise<any>, callerMethodName:string):ng.IHttpPromise<any> {
    return promise.success((data:any) => {
      this.model.length = 0;
      Array.prototype.push.apply(this.model, data);
    }).error((reason:any) => {
      console.log("StoryService" + callerMethodName, "ERROR", reason);
    });
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
