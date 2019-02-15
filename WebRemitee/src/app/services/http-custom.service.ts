import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpCustomService {
  defaultURL: string = "https://localhost:44355/api";

  constructor(public http: HttpClient, private _router: Router) { }

  private GetHeaders(): HttpHeaders {



    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', this._userService.token);
    return headers;
  }

  private GetURLSearchParams(username: string, password: string): URLSearchParams {
    let data = new URLSearchParams();
    data.append('username', username);
    data.append('password', password);
    data.append('grant_type', 'password');
    return data;
  }

  private GetRequestOptions(): any {
    let headers = this.GetHeaders();
    let options = { headers: headers };
    return options;
  }

  //Example: Validate/validate
  GetMethod(ruta: string, param?: HttpParams) {
    
    let aux: string;
 
      aux = this.defaultURL + ruta;
 
    let url: string = aux;

    return this.http.get(url,{params:param}).pipe(map((resp: any) => {
      return resp;
    }));
  }

  PostMethod(ruta: string, data: any) {
    var headers = this.GetHeaders();
    let url = this.defaultURL + ruta;
    return this.http.post(url, data, { headers: headers }).pipe(map((resp: any) => {
      return resp;
    }));


  }

  PutMethod(ruta: string, data: any) {
    var headers = this.GetHeaders();
    let url = this.defaultURL + ruta;
    return this.http.put(url, data, { headers: headers }).pipe(map((resp: any) => {
      return resp;
    }));


  }

  DeleteMethod(ruta: string, id: number) {
    var headers = this.GetHeaders();
    let url = this.defaultURL + ruta + "/" + id;
    return this.http.delete(url, { headers: headers }).pipe(map((resp: any) => {
      return resp;
    }));


  }
}
