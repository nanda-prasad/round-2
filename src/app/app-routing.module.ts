import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
  path:'',
  loadChildren: ()=> import('./authentication/authentication.module').then(m=>m.AuthenticationModule)
  },
  {
    path:'user',
    loadChildren: () => import('./user-management/user-management.module').then(m=>m.UserManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
