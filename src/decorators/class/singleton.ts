export function singleton(target) {

  // save a reference to the original constructor
  const original = target;

  // the new constructor behaviour
  let newConstructor: any = function (...args) {

    // if there is no instance stored, create one
    if (!original.instance) {

      let construct: any = function () {
        return original.apply(this, args);
      };

      // link the prototypes
      construct.prototype = original.prototype;

      // create an instance and store it
      original.instance = new construct();
    }
    return original.instance;
  };

  // copy prototype so instanceof operator still works
  newConstructor.prototype = original.prototype;

  // return new constructor (will override original)
  return newConstructor;
}
