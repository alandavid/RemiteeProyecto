import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpCustomService } from 'src/app/services/http-custom.service';
import { PayerBranch } from '../../Models/PayerBranch';
import { PayerService } from 'src/app/services/payer.service';

import { Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { PayerBranchService } from 'src/app/services/payer-branch.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-sucursal',
  templateUrl: './add-sucursal.component.html',
  styleUrls: ['./add-sucursal.component.scss']
})
export class AddSucursalComponent implements OnInit {
  ListPayers: any;
  options: FormGroup;
  Payer: PayerBranch=new PayerBranch();
  public form: FormGroup;
  constructor(private fb: FormBuilder,
    private _servicePayer:PayerService,
    private _servicePayerBranch:PayerBranchService,
    private router: Router,public _location: Location) {
    this.options = fb.group({
      color: 'primary',
      fontSize: [16, Validators.min(10)],
    });
  }

  getFontSize() {
    return Math.max(10, this.options.value.fontSize);
  }

  ngOnInit() {
    this.form = this.fb.group({
      Latitude: [null, Validators.compose([CustomValidators.number,Validators.required])],
      Longitude: [null, Validators.compose([CustomValidators.number,Validators.required])],
      FormattedAddress:[null, Validators.compose([Validators.required])],
      Name:[null, Validators.compose([Validators.required])],
      Code:[null, Validators.compose([Validators.required])],
      Rede:[null, Validators.compose([Validators.required])],
    });
    this.GetPayers();
  }

  Guardar(){
   
    this._servicePayerBranch.SavePayerBrach(this.Payer).subscribe(data =>{
     
      this.router.navigate(['/sucursales']);
    }, error =>{
      console.error(error);
    });   
  }

  GetPayers() {
    this._servicePayer.GetPayers().subscribe(data => {
      console.log(data);
      this.ListPayers = data;
    });
  }
  Cancelar() {
    this.Payer =new PayerBranch();
  }

  GoToBack(){
    this._location.back();
  }

}
