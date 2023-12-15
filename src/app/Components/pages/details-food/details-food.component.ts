import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../Services/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Meals } from '../../../interfaces/food';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-details-food',
  templateUrl: './details-food.component.html',
  styleUrls: ['./details-food.component.css']
})
export class DetailsFoodComponent implements OnInit {
  foodDetails: any | null;
  foodId: string | null = null;

  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const idFromRoute = this.route.snapshot.paramMap.get('id');
    if (idFromRoute !== null) {
      this.foodId = idFromRoute;
    }

    if (this.foodId) {
      this.foodService.getFoodDetailsById(this.foodId).subscribe(
        (data) => {
          console.log(data);

          // Verifica si data.meals existe y tiene al menos un elemento
          this.foodDetails = data.meals && data.meals.length > 0 ? data.meals[0] : null;

          if (this.foodDetails?.strYoutube) {
            this.foodDetails.strYoutube = this.sanitizer.bypassSecurityTrustResourceUrl(this.foodDetails.strYoutube);
            console.log('YouTube URL:', this.foodDetails.strYoutube);
          }
        },
        (error) => {
          console.error('Error fetching cocktail details:', error);
        }
      );
    }
  }

  toAllFood(){
    this.router.navigate(['/listFood']);
  }

}
