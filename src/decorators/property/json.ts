export function json(target, key) {

  // add a '_' to the property key
  const privateKey = `_${key}`;

  // use the formatter to get the value
  function getter() {
    return JSON.parse(this[privateKey]);
  }

  // define a default setter
  function setter(newVal:any) {
    if (this[privateKey] != newVal) {
      this[privateKey] = newVal;
    }
  }

  // override the property
  Object.defineProperty(target, key, {
    get         : getter,
    set         : setter,
    enumerable  : true,
    configurable: true
  });
}
