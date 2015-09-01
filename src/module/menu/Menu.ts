import {App} from "../../App";
import {MenuBoxDirective} from "./MenuBoxDirective";

const module:ng.IModule = App.module("app.menu", []);

module.directive("menuBox", <any>MenuBoxDirective);
