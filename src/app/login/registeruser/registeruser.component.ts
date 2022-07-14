import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {
  invalidrequest: boolean=false;

  constructor(private registerAuth:SharedService,private router:Router) { }

  ngOnInit(): void {
  }
  registerForm=new FormGroup(
    {
      id:new FormControl("",[Validators.required]),
      name: new FormControl("",[Validators.required, Validators.pattern("[a-zA-z]") ]),
      mobile: new FormControl("",[Validators.required, Validators.maxLength(10)]),
      email: new FormControl("",[Validators.required,Validators.email]),
      pwd:new FormControl("",[Validators.required]),
      regdate: new FormControl("",[Validators.required])

   });

   CreateUser(){
   // console.log(this.registerForm);
   this.registerAuth.CreateUser([this.registerForm.value.id,
    this.registerForm.value.name,
    this.registerForm.value.pwd,
    this.registerForm.value.email,
    this.registerForm.value.mobile,
  this.registerForm.value.regdate]).subscribe(res=>{
    if(res=='Failure'){
      this.invalidrequest=false;
      alert('Registeration unsuccessful');
    }
    else{
      this.invalidrequest=true;
      alert('Registeration successful');
      this.router.navigate(['/login']);
    }
  });

   }

get id():FormControl{
  return this.registerForm.get('id') as FormControl;
}
   get name(): FormControl{
    return this.registerForm.get('name') as FormControl;
   }
   get mobile(): FormControl{
    return this.registerForm.get('mobile') as FormControl;
   }
   get Email(): FormControl{
    return this.registerForm.get('email') as FormControl;
   }

   get pwd(): FormControl{
    return this.registerForm.get('pwd') as FormControl;
  }
  get regdate(): FormControl{
    return this.registerForm.get('regdate') as FormControl;
  }
}
