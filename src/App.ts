/// <reference path="../typings/main/ambient/jquery/jquery.d.ts" />
/// <reference path="../typings/main/ambient/angular/angular.d.ts" />
/// <reference path="../typings/main/ambient/angular-animate/angular-animate.d.ts" />
/// <reference path="../typings/main/ambient/angular-cookies/angular-cookies.d.ts" />
/// <reference path="../typings/main/ambient/angular-resource/angular-resource.d.ts" />
/// <reference path="../typings/main/ambient/angular-sanitize/angular-sanitize.d.ts" />
/// <reference path="../typings/main/ambient/angular-translate/angular-translate.d.ts" />
/// <reference path="../typings/main/ambient/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../typings/main/ambient/toastr/toastr.d.ts" />

/* tslint:disable:variable-name */

import * as angular from "angular";
import "angular-ui-router";
import "angular-animate";
import "angular-cookies";
import "angular-messages";
import "angular-resource";
import "angular-sanitize";
import "angular-translate";

import "bootstrap";
import "bootstrap/css/bootstrap.css!";

angular.module("app", [
  "ui.router",
  "ngAnimate",
  "ngCookies",
  "ngMessages",
  "ngResource",
  "ngSanitize",
  "pascalprecht.translate",
]);

const App:ng.IAngularStatic = angular;

export {App};
