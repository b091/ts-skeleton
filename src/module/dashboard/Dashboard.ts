import {App} from "../../App";
import {DashboardCtrl} from "./DashboardCtrl";
import "../story/Story";

const module:ng.IModule = App.module("app.dashboard", ["app.story"]);

module.controller("DashboardCtrl", DashboardCtrl);

// @ngInject
module.config(($stateProvider:angular.ui.IStateProvider) => {
  $stateProvider.state("home", {
    url: "/home",
    views: {
      application: {
        templateUrl: "src/module/dashboard/view/dashboard.html",
        controller: DashboardCtrl,
        controllerAs: "controller"
      }
    }
  });
});
