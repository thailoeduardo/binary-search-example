function regressiva(item) {
	console.log(item)

	if(item <= 1){
		return;
	} else {
		regressiva(item - 1);
	}
}

let item = 3;
while (item >= 1) {
	regressiva(item);
	item--;
}