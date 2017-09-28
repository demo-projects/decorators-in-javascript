export function freeze(target:any):any {

  // save a reference to the original constructor
  const original = target;

  // the new constructor behaviour
  let newConstructor = function (...args) {

    let construct:any = function () {
      return original.apply(this, args);
    };

    // link the prototype for 'instance of'
    construct.prototype = original.prototype;

    // freeze the instance and return it
    return Object.freeze(new construct());
  };

  // copy prototype so instanceof operator still works
  newConstructor.prototype = original.prototype;

  // return new constructor (will override original)
  return newConstructor;
}

