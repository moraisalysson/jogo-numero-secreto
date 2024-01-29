let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let tentativas = 1;
let numeroAleratorio = gerarNumeroAleatorio();
mensagemInicial();

function verificarChute() { 
    let chute = document.querySelector('input').value;
    
    if(chute == numeroAleratorio) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroAleratorio) {
            exibirTextoNaTela('p', 'O número secreto é menor que o chute.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior que o chute.');
        }
        tentativas++;
        limparCampo();
    }

}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function exibirTextoNaTela(tag, texto) { 
    let paragrafo = document.querySelector(tag);
    paragrafo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementoNaLista = listaDeNumerosSorteados.length;
    
    if(quantidadeDeElementoNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatnoorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = "";
}

function reiniciarJogo() {
    numeroAleratorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


//-------------------DESAFIOS 1---------------------------
function calcularMedia(valor1, valor2, valor3) {
    media = (valor1 + valor2 + valor3) / 3;
    return media;;
}

function verificarMaior(valor1, valor2) {
    maior = Math.max(valor1, valor2);
    return maior;
}

function multiplicacao(valor) {
    resultado = valor * valor;
    return resultado;
}

/* TIRAR COMENTÁRIOS PARA TESTAR A EXECUÇÃO.
console.log(calcularMedia(5, 15, 25));
console.log(verificarMaior(50, 30));
console.log(multiplicacao(20));
*/
//--------------------------------------------------------

//-------------------DESAFIOS 2---------------------------
function calcularIMC(alturaMetros, pesoKg) {
    let imc = pesoKg / (alturaMetros ** 2);
    return imc;;
}

function calcularFatorial(valor) {
    let contador = 1;
    let fatorial = 1;

    while(contador <= valor) {
        fatorial = fatorial * contador;
        contador++; 
    }

    return fatorial;
}

function conversorDolarParaReal(valorEmDolar, cotacaoDolarEmreal) {
    let valorConvertido = valorEmDolar * cotacaoDolarEmreal;
    return valorConvertido;
}

function calcularAreaRetangulo(altura, largura) {
    let areaRetangulo = altura * largura;
    return areaRetangulo;
}
//-------------RETÂNGULO (INÍCIO)
function calcularPerimetroRetangulo(altura, largura) {
    let perimetroRetangulo = 2 * (altura + largura);
    return perimetroRetangulo;
}

function exibirAreaEperimetroRetangulo(altura, largura) {
    console.log(`Área do retângulo: ${calcularAreaRetangulo(altura, largura)}`);
    console.log(`Perímetro do retângulo: ${calcularPerimetroRetangulo(altura, largura)}`);
}
//-------------RETÂNGULO (FIM)

//-------------CÍRCULO (INÍCIO)
let PI = 3.14;

function calcularAreaCirculo(raio) {
    let areaCirculo = PI * (raio ** 2);
    
    return areaCirculo;
}

function calcularPerimetroCirculo(raio) {
    let perimetroCirculo = 2 * PI * raio;
    
    return perimetroCirculo;
}

function exibirAreaEperimetroCirculo(raio) {
    console.log(`Área do círculo: ${calcularAreaCirculo(raio)}`);
    console.log(`Perímetro do círculo: ${calcularPerimetroCirculo(raio)}`);
}
//-------------CÍRCULO (FIM)

function exibirTabuada(numero) {
    let contador = 0;

    while(contador <= 10) {
        console.log(`${numero} x ${contador} = ${numero * contador}`);
        contador++;
    }
}

console.log(calcularIMC(1.70, 75)); //desafio1
console.log(calcularFatorial(6)); //desafio2
console.log(`R$ ${conversorDolarParaReal(5, 4.80)}`); //desafio3
exibirAreaEperimetroRetangulo(5, 10); //desafio4
exibirAreaEperimetroCirculo(10); //desafio5
exibirTabuada(10); //desafio6
//--------------------------------------------------------