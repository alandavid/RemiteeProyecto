import { Injectable } from '@angular/core';
import { HttpCustomService } from './http-custom.service';
import { PayerBranch } from '../Models/PayerBranch';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PayerBranchService {

  constructor(private _http: HttpCustomService) { }

  SavePayerBrach(data: PayerBranch) {

    return this._http.PostMethod("/Red", data);
  }

  UpdatePayerBrach(data: PayerBranch) {
    
    return this._http.PutMethod("/Red", data);
  }

  GetPayerBrach():Observable<PayerBranch[]> {
    return this._http.GetMethod("/Red");
  }
  GetPayerBrachById(id:number):Observable<any> {

    return this._http.GetMethod("/Red/GetById",new HttpParams().append("id", id.toString()));
  }

  DeletePayerBrach(id: number) {
    return this._http.DeleteMethod("/Red", id);
  }
}
