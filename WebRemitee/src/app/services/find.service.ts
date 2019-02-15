import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCustomService } from './http-custom.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FindService {

  constructor(private _http: HttpCustomService) { }

  FindRedNear(lat: number, log: number): Observable<any> {
   
    return this._http.GetMethod("/DefaultFind/GetFind", new HttpParams()
    .append("latitud", lat.toString())
    .append("longitud", log.toString()));
  }

}
