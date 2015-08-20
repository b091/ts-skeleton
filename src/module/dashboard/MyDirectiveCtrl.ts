export class MyDirectiveCtrl {

  public title:string = 'My Directive Controller';
  private state:boolean = false;

  constructor() {
    console.log('Hello MyDirectiveCtrl.constructor');
  }

  public checkMe():boolean {
    return this.state;
  }
}
