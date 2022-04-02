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
];

@NgModule({
    declarations: DECLARATIONS,
    imports: IMPORTS,
    exports: EXPORTS,
    providers: []
})
export class SharedModule {

}