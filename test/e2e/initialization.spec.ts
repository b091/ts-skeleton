/// <reference path="../references.ts" />

describe("TS Skeleton", () => {
  beforeEach(() => {
    startLocalhost();
  });

  describe("in main display page", () => {
    it("have `nav` element inside body", () => {
      const canvas:any = by.css("body nav");
      const isNavigationPresent:any = browser.isElementPresent(canvas);

      isNavigationPresent.then((present:any) => {
        expect(present).toBe(true);
      });
    });

    it("have only one `nav` element inside body", () => {
      const canvas:any = by.css("body nav");
      const findCanvas:any = browser.findElements(canvas);

      findCanvas.then((existingCanvas:any) => {
        expect(existingCanvas.length).toEqual(1);
      });
    });
  });
});
