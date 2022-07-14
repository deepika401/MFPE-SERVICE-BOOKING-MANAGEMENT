import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IBooking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private Serviceurl :string="https://localhost:44313/api/ServiceRegs";
  constructor(private http:HttpClient) { }

  getAllServiceBookingList():Observable<any[]>{
    return this.http.get<any[]>(this.Serviceurl);

  }

  getAllServiceReportsList():Observable<any[]>{
    return this.http.get<any[]>('https://localhost:44313/api/ServiceReqReports');

  }

  getServiceBookedList(id:any){
    return this.http.get<any>('https://localhost:44313/api/ServiceRegs/'+id);}

  getReportList(id:any) {
      return this.http.get<any>('https://localhost:44313/api/ServiceReqReports/'+id);
  
    }
    postbooking(value:any){
      //const body=JSON.stringify(newbooking);
      return this.http.post<any>('https://localhost:44313/api/ServiceRegs',value,{
        headers:new HttpHeaders({
          'Content-Type': 'application/json'
        })});
    }

    getAllProducts():Observable<any[]>{
      return this.http.get<any[]>('https://localhost:44390/api/Products');
  
    }
    getOneProduct(id:any){
      return this.http.get<any>('https://localhost:44390/api/Products/'+id);}

    updateProduct(){

    }

    getAllUsers():Observable<any[]>{
      return this.http.get<any[]>('https://localhost:44334/api/Users');
  
    }
    getOneUser(id:any):Observable<any[]>{
      return this.http.get<any[]>('https://localhost:44334/api/Users/'+id);
  
    }

    
    updateUser(id:any){
      ('https://localhost:44334/api/Users'+id);}

    CreateUser(user:Array<any>){
      return this.http.post('https://localhost:44334/api/Users/'+'',
      {
        Id:user[0],
        Name:user[1],
        Password:user[2],
        Email:user[3],
        Mobile:user[4],
        RegisterationDate:user[5],

      },
      {
        responseType:'text',
      });
  }

    loginUser(loginInfo: Array<any>){
      return this.http.post('https://localhost:44334/api/Users/'+'',
      {
        Email: loginInfo[0],
        password:loginInfo[1],
      },
      {
        responseType: 'text',
      });
    }

    deleteUser(id:any){
      return this.http.delete('https://localhost:44334/api/Users/'+id);
      

    }




  }

 



