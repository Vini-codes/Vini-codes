let ListaDeNumerosSorteados = []; 
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag , texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1' , 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial()
exibirTextoNaTela('h1' , 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) { 
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número de bosta é menor');
        } else {
            exibirTextoNaTela('p', 'O número de bosta é maior');
        }
        // tentativas = tentativas + 1;
        tentativas++;
        limparCampo();
    } 
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = ListaDeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista == 3) { 
        ListaDeNumerosSorteados = [];
   }
   if(ListaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
   } else { 
    ListaDeNumerosSorteados.push(numeroEscolhido);
    console.log(ListaDeNumerosSorteados);
    return numeroEscolhido;
   }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}
 function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  document.getElementById('reiniciar').setAttribute('disabled', true)
 }



 // exercícios

 let n1 = 7;
 let n2 = 6;
 let n3 = 3;
 let n4 = 5;

 function calcularMedia(n1, n2, n3, n4) {
    let media = (n1 + n2 + n3 + n4) / 4;

 }

 function verificarAprovação(media) {
    return media => 5 ? 'aprovado' : 'reprovado'
 }

 calcularMedia();
 verificarAprovação();
