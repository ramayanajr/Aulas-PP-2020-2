import { Personagem } from "./personagem";

export class Mago extends Personagem {
    magia: number;

    conjurar(player: Personagem) {
        console.log('Atacou player - ', player.nickname);
    }

    constructor(nick: string, forca: number, agilidade: number, estamina:number, magia: number) {
        super(nick, forca, agilidade,estamina);
        this.magia = magia;
    }

    magoUp() {
        this.magia += 10;
        this.aumentarLevel();
    }
}