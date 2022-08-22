import { Component, OnInit } from '@angular/core';
import { ExternalService } from '../external.service';
import { Book } from '../model/Books';
import { Admin } from '../model/Admin';
import { Reader } from '../model/Readers';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  isLoggedIn:boolean=false;

  constructor(private router:Router,private externalService: ExternalService) { }

  onSignUp(myForm:NgForm){
    alert('navigating to search-book')
    console.log(myForm.value.uname)
    console.log(myForm.value.pwd)

    if(myForm.invalid) {
      alert("navigating invalid")
      return;

    }
    this.externalService.logInReader(myForm.value.uname,myForm.value.pwd).subscribe((res) =>{
      this.isLoggedIn=true;
      this.router.navigate(['search-book'])

    });
    
  }

  createAccount(){
    alert('navigating to register-reader')
      this.router.navigate(['register-reader'])
  }

 

  ngOnInit(): void {
  }


  /*constructor() { }

  ngOnInit(): void {
  }*/

}
