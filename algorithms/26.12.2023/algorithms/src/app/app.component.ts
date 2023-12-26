import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { retry } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
// Soru 1: Verilen bir dizide tekrar eden sayıları bulan bir algoritma yazın.
  // numbers:number[] = [1, 2, 3, 4, 5, 3, 88, 88, 12, 102, 64, 5, 12];
  // newNumbers:number[] = [];
  // repetitiveNumbers:number[] = [];

  // print(){
  //   for(let i=0; i<this.numbers.length; i++){
  //     if(!this.newNumbers.includes(this.numbers[i])){
  //       this.newNumbers.push(this.numbers[i]);
  //     }else{
  //       this.repetitiveNumbers.push(this.numbers[i]);
  //     }
  //   }

  //   return this.repetitiveNumbers;
  // }

// Soru 2: Bir dizi içindeki en küçük pozitif olmayan tamsayıyı bulan bir algoritma yazın.
  // numbers:number[] = [-66, -43, 12, -72, 33, 103, 9, -12];
  // smallest:number = 0

  // print(){
  //   let prev = 0;

  //   for(let i=0; i<this.numbers.length; i++){
  //     if(this.numbers[i]<this.smallest){
  //       this.smallest = this.numbers[i];
  //       prev = this.smallest;
  //     }
  //   }

  //   return this.smallest;
  // }

// Soru 3: Bir string içindeki en uzun artan ardışık (sıralı) karakter dizisini bulan bir algoritma yazın. Örneğin, "abcdeeeefghijk" ifadesinde en uzun artan ardışık karakter dizisi "fghijk" olacaktır.
  // str:string = "abcdeeeefghijk";
  // nonRepetitiveStr:string = "";

  // print(){
  //   let strArr = this.str.split("");
  //   let prev = "";

  //   for(let i=0; i<strArr.length; i++){
  //     let current = strArr[i];
      
  //     if(current != prev){
  //       this.nonRepetitiveStr += current;
  //       prev = current;
  //     }else{
  //       this.nonRepetitiveStr = "";
  //     }
  //   }

  //   return this.nonRepetitiveStr;
  // }
}
