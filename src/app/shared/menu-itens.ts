const MENUITENS = [
    {
        nome: 'Opção 1', 
        tamNome: '12px',
        nomeIcone: 'mdi mdi-24px mdi-airplane', 
        tamIcone: '1.6rem',
        rota: 'home'                       
    },
    {
        nome: 'Opção 2', 
        tamNome: '12px',
        nomeIcone: 'pi pi-home',
        tamIcone: '1.6rem',
        rota: 'home'
    },
    {
        nome: 'Opção 3', 
        tamNome: '12px',
        nomeIcone: 'mdi mdi-24px mdi-cake',
        tamIcone: '1.6rem',
        rota: 'home'
    },
    {
        nome: 'Opção 4', 
        tamNome: '12px',
        nomeIcone: 'mdi mdi-24px mdi-car-emergency',
        tamIcone: '1.6rem',
        rota: 'home'
    }
]

export class MenuItens {
    static getMenuItens() {
        return MENUITENS;
    }
}