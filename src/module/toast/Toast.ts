import {App} from "../../App";
import "angular-toastr";
import "angular-toastr/angular-toastr.css!";

const module:ng.IModule = App.module("app.toast", ["toastr"]);

// @ngInject
module.config((toastrConfig:any) => {
  const toast:any = {};
  toast.templateUrl = "src/module/toast/view/toast.html";
  const progressbar:any = {};
  progressbar.templateUrl = "src/module/toast/view/progressbar.html";

  App.extend(toastrConfig, {
    templates: {
      toast: toast.templateUrl,
      progressbar: progressbar.templateUrl
    }
  });
});
