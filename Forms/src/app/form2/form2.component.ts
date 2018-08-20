import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { form2 } from '../data/form2.model';
import { Auth2Service } from '../services/auth2.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  data2: form2;

  constructor(private router:Router, private disp2:Auth2Service) { }

  navigateForm1(value){
    this.disp2.setFormData(value);
    this.router.navigate(['form1']);
  }

  ngOnInit(){
    let info = this.disp2.getFormData();
    if(info){
      this.data2 = {
        address : info.address,
        city : info.city,
        state : info.state,
        pin : info.pin
      }
    }
  }

  resetForm(form2? :NgForm){
    if(form2 != null)
    form2.reset();
    this.data2 = {
      address : '',
      city : '',
      state : '',
      pin : null
    }
  }

}
