class Time{
    nome;
    cor;
    estado;
    qtdeTorcida;

    constructor(nome, cor, estado, qtdeTorcida){
        this.nome = nome;
        this.cor = cor;
        this.estado = estado;
        this.qtdeTorcida = qtdeTorcida;
    }

        identifyTime(){
            console.log(`O seu time do coração é ${this.nome}, a cor principal dele é a ${this.cor} e a quantidade de torcedores é ${this.qtdeTorcida}`)
        }
}

    let Guarani = new Time('Guarani', 'Verde e Branco', 'SP', 500);
    let Ponte = new Time('Ponte Preta', 'Preto e Branco', 'SP', 500);
    
let time1 = Guarani.qtdeTorcida, time2 = Ponte.qtdeTorcida;

if (time1 > time2) {
        console.log(`O time ${Guarani.nome} tem mais torcida que o time ${Ponte.nome}`)
}else if (time2 > time1) {
    console.log(`O time ${Ponte.nome} tem mais torcida que o time ${Guarani.nome}`)
}else{
    console.log('Os times tem a mesma quantidade de torcidas')
}

Guarani.identifyTime();
Ponte.identifyTime();
