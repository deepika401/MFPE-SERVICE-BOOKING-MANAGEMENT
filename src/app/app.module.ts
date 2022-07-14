import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllbookingsComponent } from './services/allbookings/allbookings.component';
import { AllreportsComponent } from './services/allreports/allreports.component';
import { ViewbookingComponent } from './services/viewbooking/viewbooking.component';
import { CreatebookingComponent } from './services/createbooking/createbooking.component';
import { ProductComponent } from './product/product.component';
import { AllproductsComponent } from './product/allproducts/allproducts.component';
import { ViewproductComponent } from './product/viewproduct/viewproduct.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { UserComponent } from './user/user.component';
import { AllusersComponent } from './user/allusers/allusers.component';
import { ViewuserComponent } from './user/viewuser/viewuser.component';

import { UpdateuserComponent } from './user/updateuser/updateuser.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisteruserComponent } from './login/registeruser/registeruser.component';
import { ViewreportComponent } from './services/viewreport/viewreport.component';
import { ChngpwdComponent } from './login/chngpwd/chngpwd.component';
import { DeleteComponent } from './user/delete/delete.component';
@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    AllbookingsComponent,
    AllreportsComponent,
    ViewbookingComponent,
    CreatebookingComponent,
    ProductComponent,
    AllproductsComponent,
    ViewproductComponent,
    UpdateproductComponent,
    UserComponent,
    AllusersComponent,
    ViewuserComponent,
    
    UpdateuserComponent,
    DashboardComponent,
    ProfileComponent,
    LoginComponent,
    RegisteruserComponent,
    ViewreportComponent,
    ChngpwdComponent,
    DeleteComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule, ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
