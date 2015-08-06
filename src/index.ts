import {App} from './App';
import {angular} from './App';

import './module/DashboardModule';
import './module/UserModule';

angular.element(document).ready(() => {
  angular.bootstrap(document, ['Application']);
});
