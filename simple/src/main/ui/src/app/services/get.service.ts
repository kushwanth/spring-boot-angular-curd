import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private client:HttpClient) {}

  private api_url: string = "http://127.0.0.1:8080/v1/";
  public res: any;
  private headers = new HttpHeaders({
    'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 
    'Authorization': 'Bearer '+localStorage.getItem('access_token')
  });

  getAllUsers(){
      try {
        return this.client.get(this.api_url+"/users/all", { headers: this.headers });
      } catch (error) {
        console.log('Server Error')
        return null;
      }
  }

  getUsers(page:number=0){
    try {
      return this.client.get(this.api_url+"/users?page="+page.toString(), { headers: this.headers });
    } catch (error) {
      console.log('Server Error')
      return null;
    }
  }
}
