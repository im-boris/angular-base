import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilterPipe } from "./pipes/filter.pipe";
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRippleModule } from "@angular/material/core";


const DECLARATIONS = [
    FilterPipe
];

const IMPORTS = [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    RadioButtonModule,
    CheckboxModule,
    DropdownModule,
    ToastModule,
    TableModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatRippleModule
];

const EXPORTS = [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    FilterPipe,
    RadioButtonModule,
    CheckboxModule,
    DropdownModule,
    ToastModule,
    TableModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatRippleModule
];

@NgModule({
    declarations: DECLARATIONS,
    imports: IMPORTS,
    exports: EXPORTS,
    providers: []
})
export class SharedModule {

}