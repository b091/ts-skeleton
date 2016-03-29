/// <reference path="../typings/main/ambient/jquery/index.d.ts" />
/// <reference path="../typings/main/ambient/angular/index.d.ts" />
/// <reference path="../typings/main/ambient/angular-animate/index.d.ts" />
/// <reference path="../typings/main/ambient/angular-cookies/index.d.ts" />
/// <reference path="../typings/main/ambient/angular-resource/index.d.ts" />
/// <reference path="../typings/main/ambient/angular-sanitize/index.d.ts" />
/// <reference path="../typings/main/ambient/angular-translate/index.d.ts" />
/// <reference path="../typings/main/ambient/angular-ui-router/index.d.ts" />
/// <reference path="../typings/main/ambient/toastr/index.d.ts" />

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
