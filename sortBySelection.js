function ordenacaoPorSelecao(arr) {
	let novoArr = [];

	for (let i = 0; i < arr.length; i++) {
			let menor = buscaMenor(arr); // Chamada para a função buscaMenor
			novoArr.push(arr.splice(menor, 1)[0]); // Remove e adiciona o menor elemento ao novoArr
	}

	return novoArr;
}

function buscaMenor(arr) {
	let menor = arr[0];
	let menorIndice = 0;

	for (let i = 1; i < arr.length; i++) {
			if (arr[i] < menor) {
					menor = arr[i];
					menorIndice = i;
			}
	}

	return menorIndice;
}

// Exemplo de uso
let array = [5, 3, 6, 2, 10];
console.log(ordenacaoPorSelecao(array)); // Saída: [2, 3, 5, 6, 10]