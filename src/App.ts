/// <reference path="../vendor/typings/angularjs/angular.d.ts" />
/// <reference path="../vendor/typings/angularjs/angular-animate.d.ts" />
/// <reference path="../vendor/typings/angularjs/angular-cookies.d.ts" />
/// <reference path="../vendor/typings/angularjs/angular-resource.d.ts" />
/// <reference path="../vendor/typings/angularjs/angular-sanitize.d.ts" />
/// <reference path="../vendor/typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../vendor/typings/toastr/toastr.d.ts" />

/* tslint:disable:variable-name */

import * as angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-cookies';
import 'angular-messages';
import 'angular-sanitize';


angular.module('app', [
  'ui.router',
  'ngAnimate',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngSanitize'
]);

const App:angular.IAngularStatic = angular;

export {App};
