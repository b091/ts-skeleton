import {App} from "../App";

const module:ng.IModule = App.module("app.services", []);

export class EndpointService {

  private baseUri:string = "http://localhost:3000/api/";

  public getUrl(moduleName:string):string {
    return this.baseUri + moduleName + ".json";
  }

  public getUrlForId(moduleName:string, id:number):string {
    return this.getUrl(moduleName) + "/" + id;
  }
}

module.service("endpointService", EndpointService);
