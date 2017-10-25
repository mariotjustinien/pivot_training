import { Component, OnInit } from '@angular/core';
import {CalculatorService} from './calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [CalculatorService]
})

export class CalculatorComponent {
//Declaration des variables
  title= 'Angular Calculator';
  version= 'v 1.0';
  output = null;
  operator: string;
  Value:number;
  Ans:number;
  newNumber:boolean;

 constructor(private calculatorService: CalculatorService) { }

 setOutput(outputString) : void{
       this.output = outputString;
       this.Ans =  this.Value;
     };

//Fonction pour reinitialiser la calculatrice
 clear() : void{
   this.output = null;
   this.operator = null;
   this.Value = null;
   this.Ans = null;
   this.newNumber = true;
 }

//Fonction pour faire les differents calcul avec les operateurs arithmetique definie
Calculate() : void{
     var opert=this.operator;
     switch (opert) {
          case('+'):
             this.Ans +=  this.Value;
             this.setOutput(String(this.Ans));
             this.Ans = this.calculatorService.toNumber(this.output);
             this.Value=null;
             this.operator=null;
           break;
          case('-'):
             this.Ans -=  this.Value;
             this.setOutput(String(this.Ans));
             this.Ans = this.calculatorService.toNumber(this.output);
             this.Value=null;
             this.operator=null;
           break;
          case('*'):
            this.Ans *=  this.Value;
            this.setOutput(String(this.Ans));
            this.Ans = this.calculatorService.toNumber(this.output);
            this.Value=null;
            this.operator=null;
           break;
          case('/'):
            this.Ans /=  this.Value;
            this.setOutput(String(this.Ans));
            this.Ans = this.calculatorService.toNumber(this.output);
            this.Value=null;
            this.operator=null;
           break;
           case('='):
           this.operator = null;
           this.newNumber = true;
           this.setOutput(String(this.Ans));
           this.Value = null;
           this.Ans = this.calculatorService.toNumber(this.output);
           break;
         }
       }

//Fonction pour recuperer les valeurs numerique
OnClick(value): void {
    if(this.Value==null || this.newNumber){
    this.output = value;
    this.newNumber = false;
  }
  else if (value == "." && this.output.toString().indexOf(".") !== -1) {
  }
  else{
          this.output += String(value);
  }
  this.Value = this.calculatorService.toNumber(this.output);

}

//Fonction pour recuperer l'operateur arithmetique
getOperator(op : string) : void{
    if (this.Ans==null){
      this.operator = op;
      this.newNumber=true;
      this.Ans = this.Value;
      this.Value = null;

    }else{
      this.operator = op;
      this.newNumber=true;
      this.Value = null;
    }
  }

}
