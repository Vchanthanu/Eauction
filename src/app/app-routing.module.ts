import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductInfoComponent } from './product-info/product-info.component';
import { AuthGuard } from './service/auth.guard';
import { LoginComponent } from './site/login/login.component';
const routes: Routes = [
  // {path:'',redirectTo:'product',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'product',component:ProductInfoComponent,canActivate:[AuthGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
