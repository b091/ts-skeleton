import {inject, Container} from "./imports/DependencyInjection";
import {Test} from "./module/test/Test";

@inject(Test)
export class App {
  public version:string = "%VERSION%";

  constructor (private test:Test) {
    console.log("injected test instance: ", test, "with result from method foo():", test.foo());
  }

}

const container:Container = new Container();
const app:App = container.get<App>(App);

console.log(app);
