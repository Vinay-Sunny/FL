import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {

 @Output() form2 = new EventEmitter<boolean>()

 form2btn(){
   this.form2.emit(false);
 }

}
