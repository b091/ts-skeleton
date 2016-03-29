import {StoryService} from "./../../../../src/module/story/StoryService";
import {EndpointService} from "./../../../../src/services/EndpointService";
import IProvideService = angular.auto.IProvideService;
import IQService = angular.IQService;
import IDeferred = angular.IDeferred;

describe("story: StoryService", () => {

  let storyService:StoryService;
  let endpointService:any;
  let $http:any;
  let q:IQService;
  let deferredHttpLoader:IDeferred<any>;

  beforeEach(module("app"));
  beforeEach(module("app.story"));

  beforeEach(module(($provide:IProvideService) => {
    endpointService = sinon.createStubInstance(EndpointService);
    $http = {
      get: sinon.stub()
    };
    $provide.value("endpointService", endpointService);
    $provide.value("$http", $http);
  }));

  beforeEach(inject((_storyService_:StoryService, $q:IQService) => {
    storyService = _storyService_;
    q = $q;
  }));

  beforeEach(() => {
    deferredHttpLoader = q.defer();
    $http.get.returns(deferredHttpLoader.promise);
  });

  describe("getting stories", () => {
    it("calls HTTP get", () => {
      // given
      const moduleName:string = "my/module";
      endpointService.getUrl.returns(moduleName);

      // when
      storyService.getAll();

      // then
      $http.get.should.have.been.calledWithExactly(moduleName);
    });
  });

});
