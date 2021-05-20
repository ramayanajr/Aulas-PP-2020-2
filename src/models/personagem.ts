import { Item } from './item';
import {Mochila} from './mochila';

export class Personagem {
    private _nickname: string;
    private _level: number = 0;
    private forca: number;
    private agilidade: number;
    private stamina: number;
    private mochila!: Mochila;

    constructor(nick: string, forca: number, agilidade: number, stamina:number) {
        this._nickname = nick;
        this.forca = forca;
        this.stamina = stamina;
        this.agilidade = agilidade;
    }

    protected aumentarLevel() {
        this.agilidade++;
        this.stamina++;
        this.forca++;
    }

    public aumentarLevelGenerico() {
        this.aumentarLevel();
    }

    // adc aula 05
    public adcMochila(mochila: Mochila) {
        this.mochila = mochila;
    }

    // adc aula 05
    public adcItem(item: Item) {
        if(this.mochila != null)
            this.mochila.itens.push(item);
        else
            console.log('Você não possui mochila para adicionar itens');
    }

    // adc aula 05
    toString() {
        console.log(this.nickname);
    }

    get nickname(): string {
        return this._nickname;
    }

    set nickname(nick: string) {
        this._nickname = nick;
    }

    static comparacaoForca(p1: Personagem, p2: Personagem): number {
        return (p1.forca > p2.forca)?0:1;
    }

}