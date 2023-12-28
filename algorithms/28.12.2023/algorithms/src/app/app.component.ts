import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
// Soru 1: Klavyeden girilen iki inpu arasındaki sayıların üssünü alıp bu sayıların ortalamasını yazdıran algoritmayı yazınız.
  // x:number = 0;
  // y:number = 0;
  // numbers:number[] =[];
  // result:number = 0;

  // print(){
  //   this.numbers = [];

  //   for(let i=this.x; i<=this.y; i++){
  //     let power = i*i;
  //     console.log(power);
  //     this.numbers.push(power);
  //   }

  //   return this.result = this.numbers.reduce((sum, i) => sum+i, 0);
  // }

  
// Soru 2: Yarıçapı verilen dairenin alanını hesaplayan algoritmayı yazınız.
  // pi:number = 3.14;
  // r:number = 0;
  // result:number = 0;

  // print(){
  //   return this.result = this.pi * this.r *this.r;
  // }

// Soru 3: Klavyeden girilen değerlerle çarpma işlemi kullanmadan üs alma işlemi yapan algoritmayı yazınız.
  // x:number = 0;
  // y:number = 0;
  // result:number = 1;

  // print(){
  //   this.result = 1;

  //   for(let i=1; i<=this.y; i++){
  //     this.result*=this.x
  //     console.log(this.result);
  //   }

  //   return this.result;
  // }
}
