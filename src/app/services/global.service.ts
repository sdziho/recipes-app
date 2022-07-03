import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private checked:string="";
  private checkbox:boolean=false;
  constructor() { }
  getChecked():string{
    return this.checked;
  }
  setChecked(data:string):void{
    this.checked=data;
  }
  getCheckbox():boolean{
    return this.checkbox
  }
  setCheckbox(data:boolean):void{
    this.checkbox=data;
  }
}
