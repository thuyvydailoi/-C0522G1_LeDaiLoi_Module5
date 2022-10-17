import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  numberA: number;
  numberB: number;
  result: number;

  constructor() { }

  ngOnInit(): void {
  }



  resultNumber(open: string): number {
    switch (open) {
      case '+':
        return this.result = this.numberA + this.numberB;
        break;
      case '-':
        return this.result = this.numberA - this.numberB;
        break;
      case '*':
        return this.result = this.numberA * this.numberB;
        break;

      case '/':
        return this.result = this.numberA / this.numberB;
        break;
    }
  }
}
