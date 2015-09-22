import "../imports/Reflect";

export function directive(...values:string[]):any {
  return (target:Function) => {
    const directive:Function = (...args:any[]):Object => {
      return ((classConstructor:Function, args:any[], ctor:any):Object => {
        ctor.prototype = classConstructor.prototype;
        const child:Object = new ctor;
        const result:Object = classConstructor.apply(child, args);
        const res:any = typeof result === "object" ? result : child;
        console.log("22", Reflect.getMetadata("design:paramtypes", classConstructor));
        console.log("22", Reflect.getMetadata("design:properties", classConstructor));
        console.log("22", Reflect.getMetadata("design:paramtypes", classConstructor).map((a:any) => { Object.getOwnPropertyNames(a); return a.name; }).join(" "));
        return res;
      })(target, args, () => {
        return null;
      });
    };
    directive.$inject = argumentNames(target);
    return directive;
  };
}

function argumentNames(fun:Function):Array {
  var names:Array = fun.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1]
    .replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, "")
    .replace(/\s+/g, "").split(",");
  return names.length === 1 && !names[0] ? [] : names;
}
