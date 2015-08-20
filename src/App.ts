/// <reference path="../vendor/typings/angularjs/angular.d.ts" />
/// <reference path="../vendor/typings/angularjs/angular-animate.d.ts" />
/// <reference path="../vendor/typings/angularjs/angular-cookies.d.ts" />
/// <reference path="../vendor/typings/angularjs/angular-resource.d.ts" />
/// <reference path="../vendor/typings/angularjs/angular-sanitize.d.ts" />
/// <reference path="../vendor/typings/angular-translate/angular-translate.d.ts" />
/// <reference path="../vendor/typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../vendor/typings/toastr/toastr.d.ts" />

/* tslint:disable:variable-name */

import * as angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-cookies';
import 'angular-messages';
import 'angular-resource';
import 'angular-sanitize';
import 'angular-translate';

import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

angular.module('app', [
  'ui.router',
  'ngAnimate',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngSanitize',
  'pascalprecht.translate',
]);

const App:ng.IAngularStatic = angular;

export {App};
