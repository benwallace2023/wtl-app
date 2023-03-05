import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})

export class OrderPage {
  constructor(private router: Router) { }

  inputValue!: string;

  selectAllText(event: any) {
    const inputElement = event.target.querySelector('input') as HTMLInputElement;
    inputElement.select();
  }
  
  toTheConditions(){
    this.router.navigate(['conditions']);
  }
  
}