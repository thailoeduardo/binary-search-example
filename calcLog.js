function calcularLogaritmo(base, numero) {
	if( isNaN(numero) || isNaN(base) || numero <= 0 || base <= 0 ){
		return 'Insira valores válidos para número e base.';
	}

	let calc = Math.log(numero) / Math.log(base);

	return calc.toFixed(2);
}

console.log( calcularLogaritmo(2, 1024) );