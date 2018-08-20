import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Auth1Service{

   constructor() { }
    public formData :any = {
        fName : '',
        lname : '',
        email : '',
        phone : null,
        age : null,
        gender :''

    };

    setFormData(value){
        this.formData = value;
    }

    getFormData(){
        return this.formData;
    }
}