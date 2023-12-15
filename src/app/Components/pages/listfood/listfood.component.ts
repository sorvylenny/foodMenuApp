import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/Services/food.service';
import { Food, Meals } from 'src/app/interfaces/food';

@Component({
  selector: 'app-listfood',
  templateUrl: './listfood.component.html',
  styleUrls: ['./listfood.component.css']
})
export class ListfoodComponent implements OnInit {

meals: Meals[]=[];
  constructor(private foodService: FoodService,
    private router: Router) { }
  ngOnInit(): void {
    this.searchForName('Seafood');
  }

  searchForName(name:string) {
    this.foodService.getFoodByName(name).subscribe(
      (data: any) => {
        this.meals = data.meals;
        console.log(this.meals);
      },
      (error) => {
        console.error('Error fetching food by name:', error);
      }
    );
  }
 detailsFoodById(foodId: string){
  this.foodService.getFoodDetailsById(foodId).subscribe(
    (data: any) => {
      this.router.navigate(['/detailsFood', foodId]);
    },
    (error) => {
      console.error('Error fetching food by name:', error);
    }
  );
 }
}
