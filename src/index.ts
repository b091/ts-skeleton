import {App} from './App';

import './module/toast/Toast';
import './module/dashboard/Dashboard';
import './module/auth/Auth';
import './services/EndpointService';

App.element(document).ready(() => {
  App.bootstrap(document, [
    'app',
    'app.dashboard',
    'app.auth',
    'app.toast',
    'app.services'
  ]);
});
