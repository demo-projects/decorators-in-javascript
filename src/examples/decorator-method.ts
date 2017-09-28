
import {protect} from '../decorators/method/protect';

class Http {

  @protect
  get() {
    console.log('fetch data from server');
  }
}

const http = new Http();

// try to reassign the method
http.get = () => console.log('Oh no!'); // throws an error
