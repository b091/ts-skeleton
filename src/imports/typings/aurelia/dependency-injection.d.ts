declare module "aurelia/dependency-injection" {
  export * from "aurelia/dependency-injection/index";
}
declare module "aurelia/dependency-injection/container" {
  import { Resolver, ClassActivator }  from "aurelia/dependency-injection/metadata";
  export var emptyParameters:any;
  export class Container {
    addParameterInfoLocator(locator:Function):void;

    registerInstance(key:any, instance:any):void;

    registerTransient(key:any, fn:any):void;

    registerSingleton(key:any, fn:any):void;

    autoRegister(fn:any, key?:any):void;

    autoRegisterAll(fns:Function[]):void;

    registerHandler(key:any, handler:Function):void;

    unregister(key:any):void;

    get<T>(key:{new(...args:any[]):T} | Resolver):T;

    getAll(key:any):any[];

    hasHandler(key:any, checkParent?:boolean):boolean;

    createChild():Container;

    invoke(fn:Function):any;

    getOrCreateEntry(key:any):any;

    getOrCreateConstructionInfo(fn:any):any;

    createConstructionInfo(fn:any):any;
  }
}
declare module "aurelia/dependency-injection/index" {
  import { TransientRegistration, SingletonRegistration, FactoryActivator }  from "aurelia/dependency-injection/metadata";
  import { emptyParameters }  from "aurelia/dependency-injection/container";
  export { TransientRegistration, SingletonRegistration, Resolver, Lazy, All,
    Optional, Parent, ClassActivator, FactoryActivator } from "aurelia/dependency-injection/metadata";
  export { Container } from "aurelia/dependency-injection/container";
  export function autoinject(target:any):any;

  export function inject(...rest:any[]):(target:any) => void;

  export function registration(value:any):(target:any) => void;

  export function transient(key?:any):(target:any) => void;

  export function singleton(keyOrRegisterInChild:any, registerInChild?:boolean):(target:any) => void;

  export function instanceActivator(value:any):(target:any) => void;

  export function factory():(target:any) => void;
}
declare module "aurelia/dependency-injection/metadata" {
  import { Container }  from "aurelia/dependency-injection/container";
  export class TransientRegistration {
    constructor(key:any);

    register(container:Container, key:any, fn:any):void;
  }
  export class SingletonRegistration {
    constructor(keyOrRegisterInChild:any, registerInChild?:boolean);

    register(container:Container, key:any, fn:any):void;
  }
  export class Resolver {
    get(container:any):Container;
  }
  export class Lazy extends Resolver {
    static of(key:any):Lazy;

    constructor(key:any);

    get(container:Container):any;
  }
  export class All extends Resolver {
    static of(key:any):All;

    constructor(key:any);

    get(container:Container):any;
  }
  export class Optional extends Resolver {
    static of(key:any, checkParent?:boolean):Optional;

    constructor(key:any, checkParent?:boolean);

    get(container:Container):any;
  }
  export class Parent extends Resolver {
    static of(key:any):Parent;

    constructor(key:any);

    get(container:Container):any;
  }
  export class ClassActivator {
    static instance:ClassActivator;

    invoke(fn:any, args:any[]):any;
  }
  export class FactoryActivator {
    static instance:FactoryActivator;

    invoke(fn:Function, args:any[]):any;
  }
}
