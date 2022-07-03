import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() emitter:EventEmitter<number>=new EventEmitter;
  dessertColor:string="crimson";
  drinkColor:string="crimson";
  constructor(private msg:RecipeService, private choice:GlobalService) { }

  ngOnInit(): void {
    if(this.choice.getChecked()=="dessert") this.dessertColor="#9B0002";
    if(this.choice.getChecked()=="drink") this.drinkColor="#9B0002";
  }

  filterType(s:string){
    var send:string=s;
    if(s=="dessert"){
      if(this.dessertColor=="crimson") this.dessertColor="#9B0002";
      else{
        this.dessertColor="crimson";
        send="";
      }
      this.drinkColor="crimson";
    }
    if(s=="drink"){
      if(this.drinkColor=="crimson") this.drinkColor="#9B0002";
      else{
        this.drinkColor="crimson";
        send="";
      }
      this.dessertColor="crimson";
    }
    this.msg.setType(send);
    this.choice.setChecked(send);
    this.emitter.emit(0);
  }
}
