/// <reference path="../references.ts" />

describe('TS Skeleton', () => {
  beforeEach(() => {
    startLocalhost();
  });

  describe('in main display page', () => {
    it('have `nav` element inside body', () => {
      const canvas = by.css('body nav');
      const isNavigationPresent = browser.isElementPresent(canvas);

      isNavigationPresent.then((present) => {
        expect(present).toBe(true);
      });
    });

    it('have only one `nav` element inside body', () => {
      const canvas = by.css('body nav');
      const findCanvas = browser.findElements(canvas);

      findCanvas.then((existingCanvas) => {
        expect(existingCanvas.length).toEqual(1);
      });
    });
  });
});
