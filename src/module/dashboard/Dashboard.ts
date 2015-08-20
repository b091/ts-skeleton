import {App} from '../../App';
import {DashboardCtrl} from './DashboardCtrl';
import {MyDirective} from './../dashboard/MyDirective';

const module:ng.IModule = App.module('app.dashboard', []);

module.controller('DashboardCtrl', DashboardCtrl);
module.directive('myDirective', <any>MyDirective);

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
