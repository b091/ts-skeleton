export function directive(...values:string[]) {
  return (target:any) => {
    const directive = (...args:any[]) => {
      return ((classConstructor, args, ctor) => {
        ctor.prototype = classConstructor.prototype;
        const child = new ctor, result = classConstructor.apply(child, args);
        return typeof result === 'object' ? result : child;
      })(target, args, () => {});
    };
    directive['$inject'] = values;
    return directive;
  }
}
