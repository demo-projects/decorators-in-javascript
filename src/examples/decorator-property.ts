import {json} from '../decorators/property/json';
import {format} from '../decorators/property/format';



export class DataProvider {

  @json
  public data: string;

  @format( date => date.getMilliseconds() )
  public timestamp: Date;

  constructor() {
    this.timestamp = new Date();
    this.data      = '{ "id": "253", "data": [ { "name": "nir" } ] }';
  }
}

console.log(new DataProvider().data);
console.log(new DataProvider().timestamp);
