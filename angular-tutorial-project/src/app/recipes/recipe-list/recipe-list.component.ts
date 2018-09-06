import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Pizza", "A type of pie.", "https://littlecaesars.com/images/emb-5mfp_header_pizza.png");
  ];

  constructor() { }

  ngOnInit() {
  }

}
