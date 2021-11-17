import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 7),
    new Ingredient("Butter",125),
    new Ingredient("Flour",150),
    new Ingredient("Brown sugar", 80),
    new Ingredient("Cinnamon",5)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
