import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
// 1. Soru
  // x:number = 0;
  // n:number = 0;
  // numbers:number[] = [];

  // print(){
  //   for(let i=this.x; i<=this.n; i++){
  //     this.numbers.push(i);
  //   }
  //   return this.numbers;
  // }

// 2. Soru
  // n:number = 0;
  // fibNumbers:number[] = [];
  
  // fib(num:number):number{
  //   if(num === 0){
  //     return 1;
  //   }else if(num === 1){
  //     return 1;
  //   }else{
  //     return this.fib(num-1) + this.fib(num-2);
  //   }
  // }

  // printFibs() {
  //   for(let i=0; this.fib(i)<=this.n; i++) {
  //     this.fibNumbers.push(this.fib(i));
  //   }
  //   return this.fibNumbers;
  // }

// 3. Soru
  // x:number = 0;
  // evenDividers:number[] = [];

  // printEvenDividers(){
  //   this.evenDividers = [];
  //   for(let i=-this.x; i<=this.x; i++){
  //     this.x%i === 0 ? this.evenDividers.push(i) : null;
  //   }

  //   return this.evenDividers;
  // }
  
// 4. Soru
  // x:number = 0;
  // y:number = 0;
  // z:number = 0;
  // median:number = 0;
  // numbers:number[] = [];

  // getMedian(){
  //   this.numbers = [];
  //   this.numbers.push(this.x, this.y, this.z);
  //   this.numbers.sort((a, b) => a-b);
  //   this.median = this.numbers[Math.floor(this.numbers.length / 2)];
  //   return this.median;
  // }

// 5. Soru
  // x:number = 0;
  // y:number = 0;
  // remainder:number = 0;
  // count:number = 1;
  // result:string = "";

  // divide(){
  //   this.count = -1;
  //   while(this.x >= 0){
  //     this.x-=this.y
  //     this.count++
  //   }
  //   this.remainder = this.x + this.y;
  //   this.result = `Kalan: ${this.remainder.toString()}, Bölüm: ${this.count.toString()}`
  //   return this.result; 
  // }

// 6. Soru
  // x:number = 0;
  // y:number = 0;
  // result:number = 0;

  // multiply(){
  //   for(let i=0; i<this.y; i++){
  //     this.result+=this.x;
  //   }

  //   return this.result;
  // }

// 7. Soru
  // x:number = 0;
  // numbers:number[] = [];
  // sum:number = 0;
  // avg:number = 0;

  // getAvg(){
  //   if(this.x!=0){
  //     this.numbers.push(this.x);
  //   }

  //   this.sum = this.numbers.reduce((acc, i) => acc+i, 0);
  //   this.avg = this.sum / this.numbers.length;
  //   return this.avg;
  // }

// 8. Soru
  // x:number = 0;
  // i:number = 0;
  // evenNumbers:number[] = [];
  // oddNumbers:number[] = [];
  // result:number[] = [];

  // getAvgs(){
  //   if(this.i<6){
  //     this.x%2 == 0 ? this.evenNumbers.push(this.x) : this.oddNumbers.push(this.x);
  //     this.i++;
  //   }

  //   if(this.i>=6){
  //     let evenSum = this.evenNumbers.reduce((acc, i) => acc+=i);
  //     let oddSum = this.oddNumbers.reduce((acc, i) => acc+=i);
  //     this.result.push(evenSum, oddSum);
  //   }

  //   return this.result;
  // }

// 9. Soru
  // x:number = 0;
  // y:number = 0;

  // getGCD = () => {
  //   while (this.x % this.y) {
  //     let remainder = this.x % this.y;
  //     this.x = this.y;
  //     this.y = remainder;
  //   }

  //   return this.y
  // }

// 10. Soru
  // x:number = 0;
  // result:string = "";

  // isEven(){
  //   this.x%2==0 ? this.result = "Even number" : this.result = "Odd number";
  // }
}