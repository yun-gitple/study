import { Cat } from './cat';

export class CreateCatDto implements Cat {
  name: string;
  age: number;
  breed: string;
}
