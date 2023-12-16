import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../interfaces/food';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private baseUrl: string=  environment.baseUrl;

  constructor( private http: HttpClient) { }

  getAllFood(name:string): Observable<Food>{
    const url = `${this.baseUrl}search.php?s=${name}`;
    return this.http.get<Food>(url);
  }
  getFoodByCategories(categories:string): Observable<Food>{
    const url = `${this.baseUrl}filter.php?c=${categories}`;
    return this.http.get<Food>(url);
  }
  getFoodArea(area:string): Observable<Food>{
    const url = `${this.baseUrl}filter.php?a=${area}`;
    return this.http.get<Food>(url);
  }
  getFoodDetailsById(foodId: string): Observable<Food>{
    const url = `${this.baseUrl}lookup.php?i=${foodId}`;
    return this.http.get<Food>(url);
  }
  getCategories(): Observable<any> {
    const url = `${this.baseUrl}list.php?c=list`;
    return this.http.get<any>(url);
  }
  getArea(): Observable<any> {
    const url = `${this.baseUrl}list.php?a=list`;
    return this.http.get<any>(url);
  }
}
