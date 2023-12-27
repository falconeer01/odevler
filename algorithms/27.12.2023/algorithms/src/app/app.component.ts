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

// Soru 1-İlk yüz doğal sayının kareleri toplamı ile toplamın karesi arasındaki farkı bulun.
  // squares:number[] = [];
  // numbers:number[] = [];
  // result:number = 0;

  // print(){
  //   for(let i = 1; i<=100; i++){
  //     this.numbers.push(i);
  //     let square = i*i;
  //     this.squares.push(square);
  //   }

  //   let sumOfSquares = this.squares.reduce((acc, i) => acc+i, 0);
  //   let squareOfSum = this.numbers.reduce((acc, i) => acc+i, 0) * this.numbers.reduce((acc, i) => acc+i, 0);
    
  //   this.result = squareOfSum - sumOfSquares;

  //   return this.result;
  // }

// Soru 2: Latin alfabesiyle yazılan bir sayıyı roma rakamına çevirin.
  // romanNumerals: { [key: string]: number } = {
  //   M: 1000,
  //   CM: 900,
  //   D: 500,
  //   CD: 400,
  //   C: 100,
  //   XC: 90,
  //   L: 50,
  //   XL: 40,
  //   X: 10,
  //   IX: 9,
  //   V: 5,
  //   IV: 4,
  //   I: 1,
  // };

  // roman:string = "";

  // toRoman = (num:number):string => {
  //   this.roman = "";

  //   for (let i in this.romanNumerals){
  //     while(num >= this.romanNumerals[i]){
  //       this.roman += i;
  //       num -= this.romanNumerals[i]
  //     }
  //   }
  //   return this.roman;
  // }

// Soru 3: Yüksekliği ve tabanı verilen üçgenin alanını hesaplayan bir JavaScript fonksiyonu yazın.
  height:number = 0;
  insoleLength:number = 0;
  result:number = 0;

  print(){
    return this.result = (this.height * this.insoleLength) / 2;
  }
}