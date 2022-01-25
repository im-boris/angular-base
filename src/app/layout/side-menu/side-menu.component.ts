import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'br-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

    @Input() listaItemsMenu: any[] = [];

    constructor(private router: Router) {}

    ngOnInit(): void {}
    
    selecionado(item: any){
        item.selecionado = !item.selecionado;
        this.listaItemsMenu.forEach((el) => {
            if(el !== item) {
                el.selecionado = false;
            }
        });
        this.router.navigate([item.rota]);
    }

}