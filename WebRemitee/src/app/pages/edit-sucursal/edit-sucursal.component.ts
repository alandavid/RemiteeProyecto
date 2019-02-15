import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpCustomService } from 'src/app/services/http-custom.service';
import { PayerBranch } from '../../Models/PayerBranch';
import { PayerService } from 'src/app/services/payer.service';

import { Router, ActivatedRoute } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { PayerBranchService } from 'src/app/services/payer-branch.service';
import { PayerBranchEd } from 'src/app/Models/PayerBranchEd';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-sucursal',
  templateUrl: './edit-sucursal.component.html',
  styleUrls: ['./edit-sucursal.component.scss']
})
export class EditSucursalComponent implements OnInit {

  ListPayers: any;
  options: FormGroup;
  Payer: PayerBranchEd = new PayerBranchEd();
  public form: FormGroup;
  id: number;
  constructor(private fb: FormBuilder,
    private _servicePayer: PayerService,
    private _servicePayerBranch: PayerBranchService,
    private router: Router, private _route: ActivatedRoute, public _location: Location ) {
    this.options = fb.group({
      color: 'primary',
      fontSize: [16, Validators.min(10)],
    });

    this._route.params.subscribe(params => {
      this.id = +params['id'];
      this.GetPayers();
      
    });
  }

  getFontSize() {
    return Math.max(10, this.options.value.fontSize);
  }

  ngOnInit() {
    this.form = this.fb.group({
      Latitude: [null, Validators.compose([CustomValidators.number, Validators.required])],
      Longitude: [null, Validators.compose([CustomValidators.number, Validators.required])],
      FormattedAddress: [null, Validators.compose([Validators.required])],
      Name: [null, Validators.compose([Validators.required])],
      Code: [null, Validators.compose([Validators.required])],
      Rede: [null, Validators.compose([Validators.required])],
    });
    
  }

  Guardar() {

    let PayerBranchEd = new PayerBranch();
    PayerBranchEd.Code = this.Payer.code;
    PayerBranchEd.FormattedAddress = this.Payer.formattedAddress;
    PayerBranchEd.Id = this.Payer.id;
    PayerBranchEd.Latitude = this.Payer.latitude;
    PayerBranchEd.Longitude = this.Payer.longitude;
    PayerBranchEd.Name = this.Payer.name;
    PayerBranchEd.PayerId = this.Payer.payerId;

    this._servicePayerBranch.UpdatePayerBrach(PayerBranchEd).subscribe(data => {

      this.router.navigate(['/sucursales']);
    }, error => {
      console.error(error);
    });
  }

  GetPayers() {
    this._servicePayer.GetPayers().subscribe(data => {

  
      this.GetPayersById(this.id);
      this.ListPayers = data;
    });
  }
  GetPayersById(id: number) {
    console.log(id);
    this._servicePayerBranch.GetPayerBrachById(id).subscribe(data => {
      console.log(data);
      this.Payer = data;
    });
  }
  Cancelar() {
    this.Payer = new PayerBranchEd();
  }
  GoToBack(){
    this._location.back();
  }
}
