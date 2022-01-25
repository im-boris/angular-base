import { Component, ViewEncapsulation } from "@angular/core";
import { MenuItens } from "src/app/shared/menu-itens";

@Component({
    selector: 'br-template',
    templateUrl: './container.layout.component.html',
    styleUrls: ['./container.layout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ContainerLayoutComponent {

    menuItens: any[] = MenuItens.getMenuItens();

}