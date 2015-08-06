import {App} from '../App';
import {UserController} from '../controller/UserController';

App.controller('UserController', UserController);

App.config(($stateProvider) => {
  $stateProvider.state('user', {
    url: '/user',
    views: {
      application: {
        templateUrl: 'src/view/user.html',
        controller: UserController,
        controllerAs: 'controller'
      }
    }
  });
});
