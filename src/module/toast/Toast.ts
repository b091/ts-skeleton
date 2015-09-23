import {App} from "../../App";
import "angular-toastr";
import "angular-toastr/angular-toastr.css!";

const module:ng.IModule = App.module("app.toast", ["toastr"]);

// @ngInject
module.config((toastrConfig:any) => {
  App.extend(toastrConfig, {
    templates: {
      toast: "src/module/toast/view/toast.html",
      progressbar: "src/module/toast/view/progressbar.html"
    }
  });
});
