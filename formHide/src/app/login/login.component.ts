import { Component,Output,EventEmitter,Input, OnInit } from '@angular/core';
import { formModel1 } from "./../app.component"
import { FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  @Input() data :formModel1;
  @Output() dataChange = new EventEmitter<{}>();
  @Output() form1 = new EventEmitter<boolean>();
form;

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.initForm();
  }
  form1btn() {
    this.form1.emit(true);
    this.dataChange.emit(this.form.value);
  }
initForm(){
  this.form = this.fb.group({
    fname : new FormControl(this.data.fname, [Validators.required]),
    lname : new FormControl(this.data.lname, [Validators.required])
  })


}
}
