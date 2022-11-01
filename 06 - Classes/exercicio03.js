//Caucular a média

class Media {
    nota1;
    nota2;
    nota3;
    constructor(nota1, nota2, nota3) {
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }
    resultadoMedia(){
        return (this.nota1+this.nota2+this.nota3)/3
    }
    resultadoFinal(){

        const media = this.resultadoMedia();

        if (media <5) {
            console.log('reprovação')
        }else if (media >=5 && media <=7) {
            console.log('recuperação')
        }else{
            console.log('passou de semestre')
        }
    }
}

const rodolfo = new Media(5,1,1);
console.log(rodolfo.resultadoMedia());
console.log(rodolfo.resultadoFinal());




/*
const n1 = 7, n2 = 7, n3 = 8;

console.log(media = (n1+n2+n3)/3);

if (media <5) {
    console.log('reprovação')
}else if (media >=5 && media <=7) {
    console.log('recuperação')
}else{
    console.log('passou de semestre')
}*/