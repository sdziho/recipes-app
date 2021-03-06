import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { Recipe } from 'src/app/Recipe';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import {faArrowLeft, faUtensils,faClock, faPeopleGroup} from '@fortawesome/free-solid-svg-icons'
import { Location } from '@angular/common';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent implements OnInit {
  recipe:Recipe={} as Recipe;
  id:number=-1;
  faBack=faArrowLeft;
  faSummary=faUtensils;
  faClock=faClock;
  faPeople=faPeopleGroup;
  constructor(
    private msg:RecipeService, 
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.id=Number(this.route.snapshot.queryParamMap.get('id'))
    this.recipe=this.msg.getNthElement(this.id);
    if(Object.keys(this.recipe).length==0) this.router.navigate([''])
  }
  returnPrevious(){
    this.router.navigate(['']);
  }
}
