/// <reference path="../vendor/typings/angularjs/angular.d.ts" />
/// <reference path="../vendor/typings/angular-ui-router/angular-ui-router.d.ts" />

/* tslint:disable:variable-name */

import * as angular from "angular";
import "angular-ui-router";

import "bootstrap";
import "bootstrap/css/bootstrap.css!";

angular.module("app", [
  "ui.router"
]);

const App:ng.IAngularStatic = angular;

export {App};
