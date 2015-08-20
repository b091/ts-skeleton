export class LoginCtrl {

  public title:string;

  constructor(private $filter:ng.IFilterService, private $state:ng.ui.IStateService) {
    this.title = 'Login Panel';

    console.log('Angular Dependency Injection Example');
    console.log($filter, $state);
  }

}
