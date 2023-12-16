import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { FoodService } from "src/app/Services/food.service";
import { Food, Meals } from "src/app/interfaces/food";

@Component({
  selector: "app-listfood",
  templateUrl: "./listfood.component.html",
  styleUrls: ["./listfood.component.css"]
})
export class ListfoodComponent implements OnInit {
  meals: Meals[] = [];
  categories: any[] = [];
  selectedCategory: string = "";
  area: any[] = [];
  selectedArea: string = "";
  searchName: string = "";

  constructor(private foodService: FoodService, private router: Router) {}
  ngOnInit(): void {
    this.searchForCategories("Beef");
    this.foodService.getCategories().subscribe(
      (data: any) => {
        this.categories = data.meals;
      },
      error => {
        console.error("Error fetching categories:", error);
      }
    );
    this.foodService.getArea().subscribe(
      (data: any) => {
        this.area = data.meals;
      },
      error => {
        console.error("Error fetching categories:", error);
      }
    );
  }

  searchFood(form: NgForm): void {
    this.searchName = form.value.searchName;

    this.foodService
      .getAllFood(this.searchName)
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(
        (data: Food) => {
          this.meals = data.meals;
        },
        error => {
          console.error("Error fetching food:", error);
        }
      );
  }

  searchForCategories(categories: string) {
    this.foodService.getFoodByCategories(categories).subscribe(
      (data: any) => {
        this.meals = data.meals;
      },
      error => {
        console.error("Error fetching food by name:", error);
      }
    );
  }
  onCategoryChange(): void {
    this.searchForCategories(this.selectedCategory);
    this.resetSelects();
  }
  searchForArea(area: string) {
    this.foodService.getFoodArea(area).subscribe(
      (data: any) => {
        this.meals = data.meals;
      },
      error => {
        console.error("Error fetching food by name:", error);
      }
    );
  }
  onAreaChange(): void {
    this.searchForArea(this.selectedArea);
    this.resetSelects();
  }

  resetSelects(){
    this.selectedCategory = "";
    this.selectedArea = "";
  }
  detailsFoodById(foodId: string) {
    this.foodService.getFoodDetailsById(foodId).subscribe(
      (data: any) => {
        this.router.navigate(["/detailsFood", foodId]);
      },
      error => {
        console.error("Error fetching food by name:", error);
      }
    );
  }
}
