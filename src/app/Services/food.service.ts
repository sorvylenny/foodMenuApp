import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Food, Meals } from '../interfaces/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private baseUrl: string= environment.baseUrl;

  constructor( private http: HttpClient) { }

  getFoodByName(name:string): Observable<Food>{
    const url = `${this.baseUrl}filter.php?c=${name}`;
    return this.http.get<Food>(url);
  }
  getFoodDetailsById(foodId: string): Observable<Food>{
    const url = `${this.baseUrl}lookup.php?i=${foodId}`;
    return this.http.get<Food>(url);
  }
}
