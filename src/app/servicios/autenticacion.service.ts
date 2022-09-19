import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../model/login-usuario';
import { JwtDto } from '../model/jwt-dto';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  authUrl='https://bkdagforca.herokuapp.com/auth/';
  
  constructor(private httpClient: HttpClient) {}

public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
  return this.httpClient.post<any>(this.authUrl + 'nuevo', nuevoUsuario);
}

public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
  return this.httpClient.post<JwtDto>(this.authUrl + 'login', loginUsuario);
}

}
