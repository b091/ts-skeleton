import {App} from "../../App";
import {StoryBoxDirective} from "./../story/StoryBoxDirective";
import {StoryService} from "./../story/StoryService";

const module:ng.IModule = App.module("app.story", []);

module.service("storyService", StoryService);
module.directive("storyBox", <any>StoryBoxDirective);
