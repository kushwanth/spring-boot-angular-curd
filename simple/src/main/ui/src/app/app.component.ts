import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { GetService } from './services/get.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  providers: [AuthService, GetService]
})

 
export class AppComponent {
  public isLoggedIn = false;
  users: any;
  private page_no=0;
  constructor(private _service: AuthService, private _get:GetService) { }
 
  ngOnInit() {
    this.isLoggedIn = this._service.checkCredentials();    
    //let code = new URL(window.location.href).searchParams.get('code')  || null;
    if(!this.isLoggedIn) {
      this._service.login()
    }
    else{
     this._get.getAllUsers()?.subscribe(data => this.users=data)
     console.log(this.users)
    }
  }

  login() {
    window.location.href = 
      'http://127.0.0.1:8080/oauth2/authorize?response_type=code&scope=openid&client_id=' + 
         this._service.clientId + '&redirect_uri='+ this._service.redirectUri;
    }
 
  logout() {
    this._service.logout();
  }

  allUsers(){
    this._get.getAllUsers()
  }

  usersPagination(){
    this._get.getUsers(this.page_no)
  }
}