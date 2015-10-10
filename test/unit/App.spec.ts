/// <reference path="../references.ts" />
import {App} from "../../src/App";

describe("App", () => {
  describe("during initialization", () => {
    it("is alive", () => {
      App.should.not.be.undefined;
    });
  });
});
