// Você deve somar todos os números e retornar o valor total.

function somar(lista = []) {
	if(!lista.length) 
		return 'Lista vazia';

	if(lista.length < 0)
		return 'Lista menor que 0';
	
	if(lista.length === 1) 
		return lista[0]

	let total = 0;
	
	for (let index = 0; index < lista.length; index++) {
		total = total + lista[index]
	}

	return total;
}

function contarItens(lista = [] ) {
	if( lista.length === 0) {
		return 0;
	} else {
		return 1 + contarItens(lista.slice(1))
	}
}

function itemMaisAlto( lista = [] ){
	let itemAlto = 0

	if( lista === 0) {
		return 0;
	}

	for (let index = 0; index < lista.length; index++) {
		if(lista[index] > itemAlto) {
			itemAlto = lista[index];
		}
	}

	return itemAlto;
}

function quicksort(lista) {
	if( lista.length < 2) {
		return lista;
	} else {
		const pivo = lista[0];

		let menores = [];
		let maiores = [];

		for (let index = 1; index < lista.length; index++) {
			if (lista[index] <= pivo) {
				menores.push(lista[index]);
			} else {
					maiores.push(lista[index]);
			}
		}

		return quicksort(menores).concat(pivo, quicksort(maiores));
	}
}

const lista = [0, 20, 3, 8, 50];

// console.log( somar(lista) )
// console.log( contarItens(lista) )
// console.log( lista.slice(1) )
// console.log( itemMaisAlto(lista) );
console.log( quicksort( lista) );