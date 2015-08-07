import {App} from '../../App';
import {DashboardCtrl} from './DashboardCtrl';

const module:angular.IModule = App.module('app.dashboard', []);

module.controller('DashboardCtrl', DashboardCtrl);

module.config(($stateProvider:angular.ui.IStateProvider) => {
  $stateProvider.state('home', {
    url: '/home',
    views: {
      application: {
        templateUrl: 'src/module/dashboard/view/dashboard.html',
        controller: DashboardCtrl,
        controllerAs: 'controller'
      }
    }
  });
});
