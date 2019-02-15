import { Injectable } from '@angular/core';
import { HttpCustomService } from './http-custom.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayerService {

  constructor(private _http: HttpCustomService) { }

  GetPayers():Observable<any> {
    return this._http.GetMethod("/Sucursal");
  }
}
