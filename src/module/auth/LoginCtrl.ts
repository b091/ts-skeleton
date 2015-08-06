export class LoginCtrl {

  public title:string;

  constructor(private $filter:angular.IFilterService, private $state:angular.ui.IStateService) {
    this.title = 'Login Panel';

    console.log('Angular Dependency Injection Example');
    console.log($filter, $state);
  }

}
