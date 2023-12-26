import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,CommonModule, RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
// 1-Klavyeden girilecek bir N sayısına kadar olan sayıların faktöriyelini hesaplayan algoritmayı ve JavaScript kodunu yazınız.
  // n:number = 0;
  // results:number[] = [];

  // factorial(num:number):number{
  //   if(num == 0){
  //     return 1;
  //   }else if(num == 1){
  //     return 1;
  //   }else{
  //     return num * this.factorial(num-1);
  //   }
  // }

  // getFactorial(){
  //   for(let i=1; i<=this.n; i++){
  //     this.results.push(this.factorial(i));
  //   }
  //   console.log(this.results);
  //   return this.results;
  // }


  // 2-Klavyeden girilen bir sayının palindrom olup olmadığını kontrol eden algoritmayı ve JavaScript kodunu yazınız. (Palindrom sayılar, tersten okunduğunda aynı olan sayılardır. Örneğin, 121 veya 1331.)
    // s:string = "";
    // b:boolean = false;

    // isPalindrom(){
    //   let str = this.s.split("").reverse().join("");
    //   str === this.s ? this.b = true : this.b = false;
    //   return this.b
    // }


  // 3-Klavyeden girilecek X ve Y sayıları arasındaki asal sayıları bulan algoritmayı ve JavaScript kodunu yazınız.
    x:number = 0;
    n:number = 0;
    numbers:number[] = [];

    isPrime(num:number):boolean{
      let bool = true;

      for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i===0){
          bool = false;
          break;
        }
      }

      return bool;
    }

    primeLoop(){
      for(let i=this.x; i<=this.n; i++){
        if(this.isPrime(i) === true){
          this.numbers.push(i);
        }else{
          console.log("lasdkgf");
        }
      }
      return this.numbers;
    }
}