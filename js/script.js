$('#secao1').click(function(){
	$('#projeto').show();
});
$('#secao2').click(function(){
	$('#autor').show();
});
$('#botao-projeto').click(function(){
	$('#projeto').hide();
});
$('#botao-autor').click(function(){
	$('#autor').hide();
});

let quadrantes = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9'];
let jogador = parseInt(prompt("Quem deve começar?\nDigite 1 (você) ou 2 (máquina)"));
let texto_vez = document.getElementById('vez');
let finalizado = false;
let nome = '';

let jogadas = {
	'q1': 1,
	'q2': 2,
	'q3': 3,
	'q4': 4,
	'q5': 5,
	'q6': 6,
	'q7': 7,
	'q8': 8,
	'q9': 9
};

function verificar_termino(){
	if (jogador==1) {
		nome = "Você ";
	} else {
		nome = "Máquina ";
	}

	if(quadrantes.length==0){
		texto_vez.innerHTML = "Deu velha!";
		finalizado = true;
	}
	if ((jogadas['q1']==jogadas['q2'] && jogadas['q1']==jogadas['q3'])||
		(jogadas['q4']==jogadas['q5'] && jogadas['q4']==jogadas['q6'])||
		(jogadas['q7']==jogadas['q8'] && jogadas['q7']==jogadas['q9'])||
		(jogadas['q2']==jogadas['q5'] && jogadas['q2']==jogadas['q8'])||
		(jogadas['q1']==jogadas['q5'] && jogadas['q1']==jogadas['q9'])||
		(jogadas['q3']==jogadas['q5'] && jogadas['q3']==jogadas['q7'])||
		(jogadas['q3']==jogadas['q6'] && jogadas['q3']==jogadas['q9']))
	{
		texto_vez.innerHTML = nome+"ganhou!";
		finalizado = true;
	}
}

function fazer_jogada_da_maquina() {
	if (finalizado==false) {
		texto_vez.innerHTML = "É a vez da máquina";
		let jogada = 0;
		jogada = quadrantes[Math.floor(Math.random() * quadrantes.length)];
		quadrantes.splice(quadrantes.indexOf(jogada), 1);
		setTimeout(function(){
			let quadrante = document.getElementById(jogada);
			quadrante.innerHTML = '<h2>X</h2>';
			jogadas[jogada] = 'X';
			texto_vez.innerHTML = "É a sua vez!";
			verificar_termino();
			jogador = 1;
		}, 1500);
	}
}

function jogar(q){
	let espaco = document.getElementById(q);
	if (finalizado==false) {
		if(quadrantes.indexOf(q)!=-1){
			espaco.innerHTML = 'O';
			jogadas[q] = 'O';
			quadrantes.splice(quadrantes.indexOf(q), 1);
			verificar_termino();
			fazer_jogada_da_maquina();
			jogador = 2;
		}
	}
}

if (jogador==2) {
	fazer_jogada_da_maquina();
} else {
	texto_vez.innerHTML = "É a sua vez!";
}