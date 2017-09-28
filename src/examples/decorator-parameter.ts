import {validate, required} from '../decorators/parameter/validate';

export class DataModel {

  public name: string;

  @validate
  setName(@required name, @required age) {
    this.name = name;
  }

}

const model = new DataModel();



