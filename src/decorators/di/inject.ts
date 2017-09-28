export function inject(type) {

  return function recordInjection(target, propertyKey) {

    const targetType:any = target.constructor;

    if (!targetType.hasOwnProperty('_inject')) {
      targetType._inject = {};
    }

    // associate this property with the key
    targetType._inject[propertyKey] = type;
  };
}