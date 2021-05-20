import { Personagem } from "./personagem";

export class Guerreiro extends Personagem {
    private forcaAdicional: number;

    construir() {
        console.log('Construir Algo');
    }

    constructor(nick: string, forca: number, agilidade: number, estamina:number, forcaAdd: number) {
        super(nick, forca, agilidade,estamina);
        this.forcaAdicional = forcaAdd;
    }

    upar() {
        this.aumentarLevel();
    }
}