import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  res:string = "";
  temp:string = "";
  s:any;

  onClick(e){
      if(this.s){
        this.res=e;
        this.s=false;
        
      }
      else{
        this.res = this.res + e;
      }
  }

  result(){
    this.res = eval(this.res);
    
    this.s=true;
  }

  onClear(){
    this.res = "";
  }


}
