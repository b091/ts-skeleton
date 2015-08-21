import {App} from '../../App';
import {DashboardCtrl} from './DashboardCtrl';
import {StoryBoxDirective} from './../dashboard/StoryBoxDirective';
import {StoryService} from './StoryService';

const module:ng.IModule = App.module('app.dashboard', []);

module.service('storyService', StoryService);
module.controller('DashboardCtrl', DashboardCtrl);
module.directive('storyBox', [StoryBoxDirective]);

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
