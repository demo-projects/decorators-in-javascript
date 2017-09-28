import {inject} from '../decorators/di/inject';
import {Injector} from '../decorators/di/injector';

class Logger {

  log(){
    console.log('hi! im a logger');
  }
}

class Model {

  @inject(Logger)
  public logger: any;

}

// create an injector
const injector = new Injector();

// register your classes
injector.register(Logger, new Logger());

// create an instance of your class with the injector
const model = injector.instantiate(Model);

// test it!
console.log(model.logger.log());
