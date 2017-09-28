export class Injector {

  // maps values by their injectionKey.
  private valuesByInjectionKey = new Map();

  // associate an injectionKey with a value
  public register(key, value) {
    this.valuesByInjectionKey.set(key, value);
  }

  // create a new instance of the supplied Class
  public instantiate(Class){

    // start by creating a new instance of the target Class.
    const instance:any = new Class();

    // loop through all properties decorated with `@inject()`
    for (let injectionPoint of this.getInjectionPoints(Class)) {
      const injectionValue = this.valuesByInjectionKey.get(injectionPoint.injectionKey);

      // perform the injection if we have a value assigned to this injectionKey.
      if (injectionValue) {
        instance[injectionPoint.propertyKey] = injectionValue;
      }
    }

    return instance;
  }

  private getInjectionPoints (Class) {
    let result = [];

    // retrieve the `_inject` hash created by the @inject decorator
    if (Class.hasOwnProperty('_inject')) {
      result = Object.keys(Class._inject)
          .map( propertyKey => {
            return {
              propertyKey: propertyKey,
              injectionKey: Class._inject[propertyKey]
            }
          });
    }

    return result;
  }
}
