import { Injectable } from '@angular/core';

@Injectable()

//create a new function to convert string to number value into the output field

export class CalculatorService {
  toNumber(numberString) {
      var result = 0;
      if (numberString) {
        result = numberString * 1;
      }
      return result;
    };

}
