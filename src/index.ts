import {App} from './App';

import './module/dashboard/Dashboard';
import './module/auth/Auth';

App.element(document).ready(() => {
  App.bootstrap(document, [
    'app',
    'app.auth'
  ]);
});
