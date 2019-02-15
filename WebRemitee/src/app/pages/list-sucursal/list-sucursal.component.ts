import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PayerBranchService } from 'src/app/services/payer-branch.service';
import { PayerBranch } from 'src/app/Models/PayerBranch';
import { MatTableDataSource, MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material';
import { Location } from '@angular/common';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { CustomValidators } from 'ng2-validation';
import { FindService } from 'src/app/services/find.service';

@Component({
  selector: 'app-list-sucursal',
  templateUrl: './list-sucursal.component.html',
  styleUrls: ['./list-sucursal.component.scss']
})
export class ListSucursalComponent implements OnInit {
  Redes: MatTableDataSource<PayerBranch>;
  filtrar: boolean = false;
  Latitude: number;
  Longitude: number;
  public form: FormGroup;
  displayedColumns: string[] = ['id', 'code', 'name', 'formattedAddress', 'latitude', 'longitude', 'accion'];
  Ubicacion: any;
  Sucursal: any;
  constructor(private router: Router, private _serviceBranchPayer: PayerBranchService, public dialog: MatDialog, private fb: FormBuilder, private _finService: FindService) { }

  ngOnInit() {
    this.form = this.fb.group({
      Latitude: [null, Validators.compose([CustomValidators.number, Validators.required])],
      Longitude: [null, Validators.compose([CustomValidators.number, Validators.required])],

    });
    this.GetRedes();
  }

  BuscarRedes() {
    this._finService.FindRedNear(this.Latitude, this.Longitude).subscribe(data => {
      this.Ubicacion = data.adress;
      this.Sucursal = data.sucursal
    });
  }

  GetRedes() {
    this._serviceBranchPayer.GetPayerBrach().subscribe(data => {
      console.log(data);
      this.Redes = new MatTableDataSource(data);
    });
  }

  CleanSearch() {
    this.Latitude = null;
    this.Longitude = null;
    this.Ubicacion=null;
    this.Sucursal=null;
  }

  GoToAgregarRede(id: number) {
    this.router.navigate(['/AddSucursal']);
  }
  Filtrar() {
    this.filtrar = !this.filtrar;
  }

  applyFilter(filterValue: string) {
    this.Redes.filter = filterValue.trim().toLowerCase();
  }
  GoToEditarRede(id: number) {
    this.router.navigate(['/EditPayer', id]);
  }

  GoToEliminarRede(id: number) {
    let config: MatDialogConfig = {
      width: '1024px',

    }
    let dialogRef = this.dialog.open(ModalDetalle, config);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result == 1) {
        this._serviceBranchPayer.DeletePayerBrach(id).subscribe(data => {
          location.reload();
        }, error => {
          console.error(error);
        });

      }

    });

  }
}

@Component({
  selector: 'detalle-Modal',
  templateUrl: 'detalle-Modal.html',
})
export class ModalDetalle {
  idAppointment: number;
  idLogin: number;
  txtComentary: string;
  auxSubmit: boolean = false;
  public data: any;

  constructor(
    public dialogRef: MatDialogRef<ModalDetalle>,


    private router: Router,

  ) {

  }
  ngOnInit() {

  }




}

