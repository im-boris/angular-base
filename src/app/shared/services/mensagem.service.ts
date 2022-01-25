import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";

@Injectable({
    providedIn: 'root'
})
export class MensageriaService {

    constructor(public messageService: MessageService){}

    warn(mensagem:string){
        this.messageService.add({severity: "warn", summary: mensagem});
    }

    success(mensagem:string){
        this.messageService.add({severity: "success", summary: mensagem});
    }

    error(mensagem:string){
        this.messageService.add({severity: "error", summary: mensagem});
    }

    info(mensagem:string){
        this.messageService.add({severity: "info", summary: mensagem});
    }

    limpar() {
        this.messageService.clear();
    }

}