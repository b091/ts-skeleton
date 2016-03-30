import {LoginCtrl} from "./../../../../src/module/auth/LoginCtrl";
import IProvideService = angular.auto.IProvideService;

describe("auth: LoginCtrl", () => {

  let scope:any;
  let login:LoginCtrl;
  let fooBarMock:any;

  beforeEach(module("app"));
  beforeEach(module("app.auth"));

  beforeEach(module(($provide:IProvideService) => {
    fooBarMock = {
      testMethod: sinon.stub()
    };
    $provide.value("fooBar", fooBarMock);
  }));

  beforeEach(inject(($rootScope, $controller) => {
    scope = $rootScope.$new();
    login = $controller("Login", {
      $scope: scope
    });
  }));

  it("concatenates title with suffix", () => {
    // given
    const title:string = "test-title";
    const fooBarTitle:string = "example-title";
    fooBarMock.testMethod.returns(title);

    // when
    const result:string = login.fooBarTitle(fooBarTitle);

    // then
    expect(result).equals(`${title}: ${fooBarTitle}`);
  });

});
