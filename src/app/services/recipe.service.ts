import { Injectable } from '@angular/core';
import { Recipe } from '../Recipe';
import { DataService } from './data.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes:Recipe[]=[];
  subject=new Subject<any>;
  private type:string="";
  private last_fetch:string="";
  constructor(private msg:DataService) { 
  }

  getData():Observable<any>{
    return this.subject.asObservable();
  }
  setType(s:string):void{
    if(s==this.type&&this.recipes.length!=0){ 
      this.subject.next(this.recipes);
      return;
    }
    this.type=s;
    this.fetchData();
    
  }
 fetchData(){
    this.recipes=[];
    this.msg.getRecipes(this.type).subscribe((val:any)=>{
      var i=0;
      for(var rec of val.recipes){
          this.recipes.push({
            internal_id:i,
            title:rec.title,
            summary: rec.summary,
            ready_in_minutes: rec.readyInMinutes,
            servings: rec.servings,
            image: rec.image,
            dish_type: rec.dishTypes ,
            favourite:false
          });
          i++;
      }
    });
    this.subject.next(this.recipes);
    this.last_fetch="api";
  }
  searchData(s:string){
    this.recipes=[];
    this.msg.searchRecipes(s).subscribe((val:any)=>{
      var i=0;
      for(var rec of val.results){
          this.recipes.push({
            internal_id:i,
            title:rec.title,
            summary: rec.summary,
            ready_in_minutes: rec.readyInMinutes,
            servings: rec.servings,
            image: rec.image,
            dish_type: rec.dishTypes ,
            favourite:false
          });
          i++;
      }
    });
    this.subject.next(this.recipes);
    this.last_fetch="search";
  }
  
  getNthElement(n:number):Recipe{
    for(var i of this.recipes){
      if(i.internal_id==n) return i;
    }
    return {} as Recipe;
  }
  getLast():string{
    return this.last_fetch;
  }

}
