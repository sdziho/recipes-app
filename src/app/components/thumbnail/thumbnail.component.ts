import { Component, OnInit, Input, Output } from '@angular/core';
import { Recipe } from 'src/app/Recipe';
import { faHeart as fasHeart} from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  @Input() recipe:Recipe={} as Recipe;
  @Output() counter = new EventEmitter<boolean>();
  faHeart=farHeart;
  
  constructor() { }

  ngOnInit(): void {
    if(this.recipe.favourite) this.faHeart=fasHeart;
  }
  onClick(){
    if(this.faHeart==farHeart) this.faHeart=fasHeart;
    else this.faHeart=farHeart;
    this.recipe.favourite=!this.recipe.favourite;
    this.counter.emit(this.recipe.favourite);
  }
  
}
