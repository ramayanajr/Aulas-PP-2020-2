import {Item} from './item';

export class Mochila {
    itens: Item[] = [];
    capacidadeMaxima: number;

    constructor(capacidadeMax: number) {
        this.capacidadeMaxima = capacidadeMax;
    }
}