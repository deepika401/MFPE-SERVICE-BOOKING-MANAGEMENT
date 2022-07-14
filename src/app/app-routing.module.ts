import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllreportsComponent } from './services/allreports/allreports.component';
//import { ServicesComponent } from './services/services.component';
import { AllbookingsComponent } from './services/allbookings/allbookings.component';
import { ViewbookingComponent } from './services/viewbooking/viewbooking.component';
import { CreatebookingComponent } from './services/createbooking/createbooking.component';
import { ViewreportComponent } from './services/viewreport/viewreport.component';
import { AllproductsComponent } from './product/allproducts/allproducts.component';
import { ViewproductComponent } from './product/viewproduct/viewproduct.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { AllusersComponent } from './user/allusers/allusers.component';
import { ViewuserComponent } from './user/viewuser/viewuser.component';
import { UpdateuserComponent } from './user/updateuser/updateuser.component';

import { RegisteruserComponent } from './login/registeruser/registeruser.component';
import { LoginComponent } from './login/login.component';
import { ChngpwdComponent } from './login/chngpwd/chngpwd.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesComponent } from './services/services.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'api/ServiceRegs',component:AllbookingsComponent},
  {path:'api/ServiceReqReports', component:AllreportsComponent},
  {path:'viewbooking/:id',component:ViewbookingComponent},
  {path:'createbooking' , component:CreatebookingComponent},
  {path:'viewreport/:id',component:ViewreportComponent},
  {path:'allproducts',component:AllproductsComponent},
  {path:'viewproduct/:id',component:ViewproductComponent},
  {path:'updateproduct/:id',component:UpdateproductComponent},
  {path:'allusers',component:AllusersComponent},
  {path:'viewuser/:id',component:ViewuserComponent},
  {path:'updateuser/:id',component:UpdateuserComponent},
 
  {path:'register',component:RegisteruserComponent},
  {path:'login',component:LoginComponent},
  {path:'changepassword', component:ChngpwdComponent},
  {path:'profile',component:ProfileComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'services',component:ServicesComponent},
  {path:'products',component:ProductComponent},
  {path:'users',component:UserComponent},
  {path:'', redirectTo:'login',pathMatch:'full'}

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
