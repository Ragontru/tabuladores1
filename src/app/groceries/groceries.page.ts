import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.page.html',
  styleUrls: ['./groceries.page.scss'],
})
export class GroceriesPage implements OnInit {

  public groceries: any;

  constructor() {
    this.groceries = [
      'Bread',
      'Milk',
      'Cheese',
      'Snacks',
      'Apples',
      'Bananas',
      'Peanut Butter',
      'Chocolate',
      'Avocada',
      'Vegemite',
      'Muffins',
      'Paper towels'
    ];

  }

  ngOnInit() {
  }

}
