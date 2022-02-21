let nomeTimeA = prompt(" Digite o nome do time A");
let nomeTimeB = prompt(" Digite o nome do time B");


const nomeA_HTML = document.getElementById("nomeTimeA");
const nomeB_HTML = document.getElementById("nomeTimeB");
const pontoA_HTML = document.getElementById("pontuacaoA");
const pontoB_HTML = document.getElementById("pontuacaoB");
const setA_HTML = document.getElementById("setA");
const setB_HTML = document.getElementById("setB");

nomeA_HTML.innerText = nomeTimeA;
nomeB_HTML.innerText = nomeTimeB;

let pontoA = 0;
let pontoB = 0;
let setA = 0;
let setB = 0;
pontoA_HTML.innerText = pontoA;
pontoB_HTML.innerText = pontoB;


pontoA_HTML.addEventListener("click", function(){
    // o quanto o pontoA_html for clicado

    pontoA = pontoA + 1;
    pontoA_HTML.innerHTML = pontoA;
    verificarFimDoSet();
});


//segunda forma de fazer 
pontoB_HTML.addEventListener("click", function() {
    //o que deve ser feito
    // quanto pontoB_HTML for clicado

    pontoB = pontoB + 1;
    pontoB_HTML.innerText = pontoB;
    verificarFimDoSet();

});

function  verificarFimDoSet() {
    //ver qual ganhou o set
    if (pontoA >= 18 && pontoA-pontoB >= 2) {
        // a ganhou o set
        //atualizar a pontuacao do set
        setA= setA+1;
        setA_HTML.innerText = setA;
        zerarOPlacarDePontosEVerificarFimDeJogo();
        
    } else if (pontoB >= 18 && pontoB - pontoA >=2){
        // b ganhou o set
        //atualizar a pontuacao do set
        setB= setB+1;
        setB_HTML.innerText = setB;
        zerarOPlacarDePontosEVerificarFimDeJogo(); 
    }

}

function zerarOPlacarDePontosEVerificarFimDeJogo(){
    //xerar o placar de pontos
    pontoA=0;
    pontoB=0;
    pontoA_HTML.innerText=pontoA;
    pontoB_HTML.innerText=pontoB;


    if (setA === 2 || setB == 2) {
        alert ("Fim de jogo");
    }
}

