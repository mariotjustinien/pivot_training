import { Component } from '@angular/core';
import {CalculatorService} from './calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [CalculatorService]
})

export class CalculatorComponent {
  title= 'Angular Calculator';
  version= 'v 1.0';
  output = null;
  operator: string;
  pendingValue = null;
  runningTotal = null;
  newNumber = true;

 constructor(private calculatorService: CalculatorService) { }

 OnClick(value) {
    if(this.pendingValue==null || this.newNumber){
    this.output = value;
    this.newNumber = false;

  }
  else if (value == "." && this.output.toString().indexOf(".") !== -1) {
  }
  else{
          this.output += String(value);
  }
  this.pendingValue = this.calculatorService.toNumber(this.output);
}

  getOperator(op : string){
    if (this.runningTotal==null){
      this.operator = op;
      this.newNumber=true;
      this.runningTotal = this.pendingValue;
      this.pendingValue = null;

    }else{
      this.operator = op;
      this.newNumber=true;
      this.pendingValue = null; 
    }
  }

  setOutput(outputString) {
      this.output = outputString;
      this.runningTotal =  this.pendingValue;
    };

clear(){
  this.output = null;
  this.operator = null;
  this.pendingValue = null;
  this.runningTotal = null;
  this.newNumber = true;
}

  Calculate() {
    var opert=this.operator;
    switch (opert) {
         case('+'):
            this.runningTotal +=  this.pendingValue;
            this.setOutput(String(this.runningTotal));
            this.runningTotal = this.calculatorService.toNumber(this.output);
            this.pendingValue=null;
            this.operator=null;
          break;
         case('-'):
            this.runningTotal -=  this.pendingValue;
            this.setOutput(String(this.runningTotal));
            this.runningTotal = this.calculatorService.toNumber(this.output);
            this.pendingValue=null;
            this.operator=null;
          break;
         case('*'):
           this.runningTotal *=  this.pendingValue;
           this.setOutput(String(this.runningTotal));
           this.runningTotal = this.calculatorService.toNumber(this.output);
           this.pendingValue=null;
           this.operator=null;
          break;
         case('/'):
           this.runningTotal /=  this.pendingValue;
           this.setOutput(String(this.runningTotal));
           this.runningTotal = this.calculatorService.toNumber(this.output);
           this.pendingValue=null;
           this.operator=null;
          break;
          case('='):
          this.operator = null;
          this.newNumber = true;
          this.setOutput(String(this.runningTotal));
          this.pendingValue = null;
          this.runningTotal = this.calculatorService.toNumber(this.output);
          break;
        }
      }

}
