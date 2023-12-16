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
  video:string = '';
  url: string = '';
  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute,
    private router: Router,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const idFromRoute = this.route.snapshot.paramMap.get('id');
    if (idFromRoute !== null) {
      this.foodId = idFromRoute;
    }

    if (this.foodId) {
      this.foodService.getFoodDetailsById(this.foodId).subscribe(
        (data) => {

          this.foodDetails = data.meals && data.meals.length > 0 ? data.meals[0] : null;
          this.url = this.foodDetails.strYoutube;

        },
        (error) => {
          console.error('Error fetching cocktail details:', error);
        }
      );
    }

  }

  getVideoIframe() {
     var video, results;

    if (this.url === null) {
      return '';
    }
    results = this.url.match('[\\?&]v=([^&#]*)');
    video = results === null ? this.url : results[1];

    return this._sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + video
    );
  }
  toAllFood(){
    this.router.navigate(['/listFood']);
  }

}
