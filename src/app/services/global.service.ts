import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private checked:string="";
  private checkbox:boolean=false;
  private input:string="";
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
  getInputData():string{
    return this.input;
  }
  setInputData(data:string):void{
    this.input=data;
  }

}
