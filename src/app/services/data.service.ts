import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  //acc4bd62c3a7417588015c2709627ba1
  //4aebb5e76edd4de8a04adf44c85138d7
  //ff5ae555c6c44c0a84711df0583d5049
  //9913226b08494665b4a4e555a69b818f
  private apiKey="acc4bd62c3a7417588015c2709627ba1";
  private api="https://api.spoonacular.com/recipes/random?apiKey="+this.apiKey+"&number=10";

  constructor(private http:HttpClient) { 
  }
  getRecipes(s:string):Observable<any>{
    const _api=this.api+"&tags="+s
    console.log(_api)
    return this.http.get<any>(_api);
  }
}
