import {App} from './App';

import './module/toast/Toast';
import './module/dashboard/Dashboard';
import './module/auth/Auth';

App.element(document).ready(() => {
  App.bootstrap(document, [
    'app',
    'app.dashboard',
    'app.auth',
    'app.toast'
  ]);
});
