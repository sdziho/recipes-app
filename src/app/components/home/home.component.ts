import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'; 
import { Recipe } from 'src/app/Recipe';
import { GlobalService } from 'src/app/services/global.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipes:Recipe[]=[];
  counter:number=0;
  isChecked:boolean=false;
  sub:Subscription=new Subscription;

  constructor(
    private msg: RecipeService, 
    private choice:GlobalService,) { 
    this.sub=this.msg.getData().subscribe((val:Recipe[])=>this.recipes=val)
  }
  ngOnInit():void{
    this.msg.setType(this.choice.getChecked())
    for(let i of this.recipes){
      if(i.favourite) this.counter++;
    }
    this.isChecked=this.choice.getCheckbox();
    if(this.isChecked) this.sortRecipes();
  }
  filter(e:any){
    if(e.target.checked) this.sortRecipes();
    else this.recipes.sort(function(a:Recipe, b:Recipe){return a.internal_id-b.internal_id})
    this.isChecked=!this.isChecked;
    this.choice.setCheckbox(this.isChecked);
  }
  changeCount(e:boolean){
    if(e) this.setCounter(this.counter+1);
    else this.setCounter(this.counter-1);
    if(this.counter>0&&this.isChecked) this.sortRecipes();
  }
  setCounter(cnt:number){
    this.counter=cnt;
  }
  sortRecipes(){
    this.recipes.sort(function(a:Recipe, b:Recipe){return (a.favourite === b.favourite)? 0 : a.favourite? -1 : 1;});
  }
  ngOnDestroy():void{
    this.sub.unsubscribe();
  }
}
