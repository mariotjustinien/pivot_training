import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {
  toNumber(numberString) {
      var result = 0;
      if (numberString) {
        result = numberString * 1;
      }
      return result;
    };

}
