


class Base {
    constructor() {
        console.log('Sou a classe base');
    }
}

interface if1 {
    tp: String;
    tipo(): boolean;
}

interface if2 {
    tp2: String;
    tipo2(): boolean;
}

class Code extends Base implements if1, if2{
    teste: String=  '';

    constructor() {
        super();
    }
    tp2!: String;
    tipo2(): boolean {
        throw new Error('Method not implemented.');
    }
    tp!: String;
    tipo(): boolean {
        throw new Error('Method not implemented.');
    }

    static main() {
        // let resp = readline.question('Teste');
    }
}

export default Code;