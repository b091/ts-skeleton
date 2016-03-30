/// <reference path="../typings/main/ambient/jquery/index.d.ts" />
/// <reference path="../typings/main/ambient/angular/index.d.ts" />
/// <reference path="../typings/main/ambient/angular-ui-router/index.d.ts" />
/// <reference path="../typings/main/ambient/toastr/index.d.ts" />

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
