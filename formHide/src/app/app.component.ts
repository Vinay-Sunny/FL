import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form1 : formModel1 = new formModel1();



  route1:boolean;
  route2:boolean;
  hide(logged:boolean) {
    this.route1 = logged;
    this.route2 = true;
  }
  show(logged:boolean) {
    this.route2 = logged;
    this.route1 = false;
  }
  
  
}

export class formModel1{
  fname : string
  lname : string
}


