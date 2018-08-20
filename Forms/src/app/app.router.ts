import { Routes } from '@angular/router'
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';

export const routes : Routes = [
    {path :'' , component:Form1Component},
    {path :'form1' , component:Form1Component},
    {path :'form2' , component:Form2Component},
    {path :'**' , component:Form1Component}

]