import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe("Crumble","Le crumble du chat qui tousse de marmiton", "https://upload.wikimedia.org/wikipedia/commons/4/4a/Crumble_%C3%A0_la_rhubarbe.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
