function pesquisaBinaria(lista = [], item = 0) {
	let baixo = 0;
	let alto = lista.length - 1;
	let passos = 0;

	while (baixo <= alto) {
		passos++;

		let meio = Math.floor((baixo + alto) / 2)
		let chute = lista[meio];
		
		// console.log('baixo:', baixo);
		// console.log('alto:', alto);
		// console.log('baixo <= alto:', baixo <= alto);
		// console.log('meio:', meio);
		// console.log('chute:', chute);

		if(chute == item) {
			// console.log('chute == item:', chute == item)
			// console.log('passos', passos)
			return meio;
		}

		if( chute > item ) {
			// console.log('alto = meio - 1:', alto = meio - 1)
			alto = meio - 1;
		} else {
			// console.log('baixo = meio + 1:', baixo = meio + 1)
			baixo = meio + 1;
		}
	}

	return null;
}

let minhaLista = [];
for (let i = 1; i <= 128; i++) {
	minhaLista.push(i);
}

console.log( pesquisaBinaria( minhaLista, 50 ) );
