import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';
import { HomeComponent } from './home/home.component';
import { UpdateFormComponent } from './update-form/update-form.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'addform',component:AddFormComponent},
  {path:'editform',component:UpdateFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
