import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
  
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatOptionModule,
  MatLineModule,
  MatListModule,
  MatTabsModule,
  MatSortModule,
  MatDialogModule,
  MatSelectModule,
  MatTableModule,
  MatTreeModule,
  MatBadgeModule, MatChipsModule,
  MatRadioModule,
  MatStepperModule,
  MatGridListModule,
  MatToolbarModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AddSucursalComponent } from './pages/add-sucursal/add-sucursal.component';
import { EditSucursalComponent } from './pages/edit-sucursal/edit-sucursal.component';
import { ListSucursalComponent, ModalDetalle } from './pages/list-sucursal/list-sucursal.component';
import { PageNotFoundComponentComponent } from './pages/page-not-found-component/page-not-found-component.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HttpCustomService } from './services/http-custom.service';
import { PayerService } from './services/payer.service';
import { PayerBranchService } from './services/payer-branch.service';
import { FindService } from './services/find.service';

const appRoutes: Routes = [
  {
    path: 'addPayer',
    component: AddSucursalComponent,
    pathMatch: 'full'
  },
  {
    path: 'EditPayer/:id',
    component: EditSucursalComponent
  },
  {
    path: 'sucursales',
    component: ListSucursalComponent,
    
  },
  {
    path: '**',
    component: AddSucursalComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AddSucursalComponent,
    EditSucursalComponent,
    ListSucursalComponent,
    PageNotFoundComponentComponent,
    FooterComponent,
    FooterComponent,
    ModalDetalle

  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule,
    MatLineModule,
    MatListModule,
    MatTabsModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule,
    MatTreeModule,
    MatBadgeModule, MatChipsModule,
    MatRadioModule,
    MatStepperModule,
    MatGridListModule,
    MatToolbarModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [HttpCustomService,PayerService,PayerBranchService,FindService],
  entryComponents:[ModalDetalle],
  bootstrap: [AppComponent]
})
export class AppModule { }
