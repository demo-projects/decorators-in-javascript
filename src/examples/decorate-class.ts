

import {freeze} from '../decorators/class/freeze';
import {singleton} from '../decorators/class/singleton';

//-----------------------------------
// Singelton
//-----------------------------------
@singleton
class User {
  private _name;

  constructor(name) {
    this._name = name;
  }

  public get name() {
    return this._name;
  }

  public set name(value) {
    this._name = value;
  }
}

const nir = new User('nir');
const ran = new User('ran');

console.log(nir.name); // logs: 'nir'
console.log(ran.name); // logs: 'nir'

//-----------------------------------
// Freeze
//-----------------------------------

@freeze
class Logger {
  public id = 5;
}

const logger = new Logger();
console.log(logger.id);

logger.id = 230; // will throw error
