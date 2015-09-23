import "../imports/Reflect";

export function directive(...values:string[]):any {
  return (target:Function) => {
    const directive:Function = (...args:any[]):Object => {
      return ((classConstructor:Function, args:any[], ctor:any):Object => {
        ctor.prototype = classConstructor.prototype;
        const child:Object = new ctor;
        const result:Object = classConstructor.apply(child, args);
        return typeof result === "object" ? result : child;
      })(target, args, () => {
        return null;
      });
    };
    directive.$inject = argumentNames(target);
    return directive;
  };
}

function argumentNames(fun:Function):Array<string> {
  var names:Array<string> = fun.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1]
    .replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, "")
    .replace(/\s+/g, "").split(",");
  return names.length === 1 && !names[0] ? [] : names;
}
