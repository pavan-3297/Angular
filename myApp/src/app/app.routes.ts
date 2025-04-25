import { Routes } from '@angular/router';
import { CurdOpeartionComponent } from './curd-opeartion/curd-opeartion.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

export const routes: Routes = [
  { path: 'curd', component: CurdOpeartionComponent },
  {path:'databinding',component:DataBindingComponent}
];
