import { Component, EventEmitter, OnInit, Output, HostListener } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { faTag,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() couterEmitter:EventEmitter<number>=new EventEmitter;
  dessertColor:string="crimson";
  drinkColor:string="crimson";
  timer:any;
  inputData:string="";
  send:string="";
  width:number=window.innerWidth;
  faTag=faTag; faSearch=faMagnifyingGlass;
  focusSearch:string="200px";
  showButtons:boolean=true;

  constructor(private msg:RecipeService, private choice:GlobalService) { }

  ngOnInit(): void {
    if(this.choice.getChecked()=="dessert") this.dessertColor="#9B0002";
    if(this.choice.getChecked()=="drink") this.drinkColor="#9B0002";
    this.inputData=this.choice.getInputData();
    if(this.width<600) this.focusSearch="20px"
  }
  
  filterType(s:string){
    this.send=s;
    if(s=="dessert"){
      if(this.dessertColor=="crimson") this.dessertColor="#9B0002";
      else{this.dessertColor="crimson"; this.send=""; }
      this.drinkColor="crimson";
    }
    if(s=="drink"){
      if(this.drinkColor=="crimson") this.drinkColor="#9B0002";
      else{this.drinkColor="crimson";this.send="";}
      this.dessertColor="crimson";
    }
    
    this.choice.setChecked(this.send);
    if(this.choice.getInputData().length>=3)this.msg.searchData(this.choice.getInputData())
    else this.msg.setType(this.send);
    this.couterEmitter.emit(0);
  }

  searchData(e:any){
    if(this.width<600){
      this.focusSearch="200px";
      this.showButtons=false;
    } 
    clearTimeout(this.timer);
    if(e.target.value.length>=3){
      this.timer=setTimeout(()=>{
        this.msg.searchData(e.target.value);
        this.couterEmitter.emit(0);
      }, 1000);
    } 
    else if(this.msg.getLast()=="search"){
      this.timer=setTimeout(()=>{
        this.msg.fetchData();
        this.couterEmitter.emit(0);
      }, 1000);
      
    }
    this.choice.setInputData(e.target.value);
  }
  expand(){
    if(this.width<600){
      this.focusSearch="200px";
      this.showButtons=false;
    } 
    
  }
  collapse(){
    if(this.width<600){
      setTimeout(()=>{this.focusSearch="20px";},500)
      setTimeout(()=>{this.showButtons=true;},700);
    } 
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.width=window.innerWidth;
    if(this.width<600) this.focusSearch="20px";
    else this.focusSearch="200px";
  }
  
}
