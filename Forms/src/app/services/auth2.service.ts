import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Auth2Service{

    public formData : any = {
        address:'',
        city:'',
        state : '',
        pin : null

    };

    setFormData(value) {
        this.formData = value;
    }

    getFormData(){
        return this.formData;
    }
}