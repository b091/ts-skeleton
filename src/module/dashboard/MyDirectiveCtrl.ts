export class MyDirectiveCtrl {

  public title:string = "My Directive Controller";
  private state:boolean = false;

  constructor() {
  }

  public checkMe():boolean {
    return this.state;
  }
}
