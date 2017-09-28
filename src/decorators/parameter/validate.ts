import "reflect-metadata";

// generate a private key as symbol
const requiredMetadataKey = Symbol("required");

/**
 * get metadata fro required parameters of the
 * method and throw if a required parameter missing
 */
export function validate(target, propertyName, descriptor) {

  // save a reference to the original method name
  let method = descriptor.value;

  // check for required parameters
  descriptor.value = function () {
    let requiredParameters = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);

    // loop over required parameters
    if (requiredParameters) {
      for (let parameterIndex of requiredParameters) {
        if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
          throw new Error("Missing required argument!!!!");
        }
      }
    }

    // invoke the original method
    return method.apply(this, arguments);
  }
}

/**
 * mark a parameter as required by adding
 * it's index to a 'required keys' array
 */
export function required(target: Object, propertyKey, parameterIndex) {

  // check for an existing required params array or create an empty one
  let requiredParameters = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];

  // push the decorated parameter index
  requiredParameters.push(parameterIndex);

  // update the metadata with the changes
  Reflect.defineMetadata(requiredMetadataKey, requiredParameters, target, propertyKey);
}
