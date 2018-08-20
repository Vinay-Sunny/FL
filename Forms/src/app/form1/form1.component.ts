import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { form1 } from '../data/form1.model';
import { Auth1Service } from '../services/auth1.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  hero:form1;
 

constructor(private router:Router,private disp1:Auth1Service){}
navigateForm2(value){
  this.disp1.setFormData(value);
  this.router.navigate(['form2']);
}
name;

   ngOnInit(){
  

  let data = this.disp1.getFormData();
  
    this.hero = {
      firstname:data.fName,
      lastname:data.lname,
      email:data.email,
      phone:data.phone,
      age : data.age,
      gender:data.gender
    }

console.log(this.hero);
}

resetForm(form? :NgForm){
  if(form != null)
  form.reset();
  this.hero = {
    firstname :'',
    lastname :'',
    email :'',
    phone :null,
    age :null,
    gender:''
  }
}

}
