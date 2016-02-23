// import "./../../../test";

import "../../../../src/module/auth/Auth";
// import {LoginCtrl} from "../../../../src/module/auth/LoginCtrl";


var module:Function;

describe("auth: LoginCtrl", () => {

  let loginCtrl:any;
  let fooBarMock:any;

  beforeEach(module("app"));
  // beforeEach(module("app.auth"));
  beforeEach(module(($provide:any) => {
    console.log("HERE", $provide);
    fooBarMock = {
      testMethod: sinon.stub(),
    };
    $provide.value("FooBar", fooBarMock);
  }));

  // beforeEach(inject((_Login_) => {
  //   console.log("TTTTT", _Login_);
    // loginCtrl = _Login_;
  // }));

  it("ASD ASD", () => {
    // console.log("hey", loginCtrl);
    // when
    // flipbookPaginator.nextPage();

    // then
    // flipbookAdapterMock.nextPage.should.have.been.called;
  });

});
