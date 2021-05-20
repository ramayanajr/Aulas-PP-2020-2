import {Personagem} from './models/personagem';
import {Mochila} from './models/mochila';
import {Item} from './models/item';
import { Guerreiro } from './models/guerreiro';
import { Mago } from './models/mago';

import read from 'readline-sync';

let ramayana: Personagem = new Personagem('Ramatuk', 10, 8, 10);
console.log(ramayana.nickname);
ramayana.nickname = 'teste';

ramayana.adcMochila(new Mochila(3));

ramayana.adcItem(new Item('Espada', 'Espada de iniciante'));

// ramayana.aumentarLevel();
ramayana.aumentarLevelGenerico();

console.log(ramayana);

let barbaro: Guerreiro = new Guerreiro('Barba',10,2,4,10);
barbaro.aumentarLevelGenerico();
console.log('Barbaro',barbaro);

let sacerdote: Mago = new Mago('Magia',10,2, 4,10);
console.log('Sacerdote', sacerdote);
sacerdote.conjurar(ramayana);
sacerdote.magoUp();

console.log('Quem é mais forte? ', Personagem.comparacaoForca(ramayana, barbaro));

let resposta = read.question('Informe o valor: ');
console.log('Leitura ', resposta);


