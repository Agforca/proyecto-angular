import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string = 'https://bkdagforca.herokuapp.com/auth/login';
  
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get<any>(this.url+"persona");
  }
}
