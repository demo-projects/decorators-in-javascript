// prevent a method to be overridden
export function protect (target, propertyKey, descriptor) {
    descriptor.writable = false;
}
