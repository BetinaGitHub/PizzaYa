import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variedad-pizzas',
  templateUrl: './variedad-pizzas.component.html',
  styleUrls: ['./variedad-pizzas.component.scss']
  
})
export class VariedadPizzasComponent implements OnInit {

  pizza = {
    "name": "mozzzarella",
    "desc": "Jamon, Tomate y Queso",
    "price": 600,
    "image" : "assets/img/pizzas/mozzarella.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
