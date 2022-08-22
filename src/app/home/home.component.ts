import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor(private router:Router) { }
  goToadmin($myParam:string=''):void{
    const navigationDeatils:String[]=['/admin-login']
    if($myParam.length){
      navigationDeatils.push($myParam);
    }
    this.router.navigate(navigationDeatils);
  }
  goTologin($myParam:string=''):void{
    const navigationDeatils:String[]=['/login']
    if($myParam.length){
      navigationDeatils.push($myParam);
    }
    this.router.navigate(navigationDeatils);
  }

}
