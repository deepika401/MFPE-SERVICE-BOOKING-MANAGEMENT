import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean =false;
  

  constructor(private router:Router, private loginAuth:SharedService) { }

  ngOnInit(): void {
  }
   loginForm=new FormGroup(
    {
      email: new FormControl("",[Validators.required,Validators.email]),
      pwd:new FormControl("",[Validators.required])

   });

   loginSubmitted(){
    //console.log(this.loginForm);
    this.loginAuth.loginUser([this.loginForm.value.email,this.loginForm.value.pwd]).subscribe(res=>{
      if(res=='Failuer'){
        this.invalidLogin=false;
        alert('Login unsuccessful');
      }
      else{
        this.invalidLogin=true;
        alert('Login successful');
        this.router.navigateByUrl("/dashboard");
      }
    });
   }

   /*loginSubmitted(form:NgForm){
    
    /*this.loginAuth
    .loginUser([this.loginForm.value.email,
      this.loginForm.value.pwd])
      .subscribe((res)=>{
        if(res=='Failure'){
          this.isUserValid=false;
        }
        else{
          this.isUserValid=true;
          //this.setToken(res);
          alert(res);
        }
      });*/
     /* const credentials=[form.value.email,form.value.pwd]
      this.loginAuth.loginUser(credentials).subscribe(res=>{
        const token = (<any>res).token;
        localStorage.setItem("jwt",token);
        
        if(this.invalidLogin==false)
          this.router.navigate(["/"]);
       
      });





   }*/
   

  
   /*setToken(token: string){
    localStorage.setItem("access_token",token);
   }*/

   get Email(): FormControl{
    return this.loginForm.get('email') as FormControl;
   }

   get pwd(): FormControl{
    return this.loginForm.get('pwd') as FormControl;

   }

}
