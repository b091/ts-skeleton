import {App} from '../../App';
import 'angular-toastr'
import 'angular-toastr/angular-toastr.css!'

const module = App.module('app.toast', ['toastr']);

module.config((toastrConfig) => {
  angular.extend(toastrConfig, {
    templates: {
      toast: 'src/module/toast/view/toast.html',
      progressbar: 'src/module/toast/view/progressbar.html'
    }
  });
});
