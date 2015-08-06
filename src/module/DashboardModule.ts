import {App} from '../App';
import {DashboardController} from '../controller/DashboardController';

App.controller('DashboardController', DashboardController);

App.config(($stateProvider) => {
  $stateProvider.state('home', {
    url: '/home',
    views: {
      application: {
        templateUrl: 'src/view/dashboard.html',
        controller: DashboardController,
        controllerAs: 'controller'
      }
    }
  });
});
