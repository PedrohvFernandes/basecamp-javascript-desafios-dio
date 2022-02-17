function substituiNumerosPares(array) {
    if (!array) return console.log(-1);
	if (!array.length) return console.log(-1);

    console.log(`Vetor normal: [${array}]`);
    
	const naoZero = (num) => num === 0;
	const numPar = (num) => num % 2 === 0;

	for (let i = 0; i < array.length; i++) {
        console.log(`Valor: [${array[i]}]`);
		if (numPar(array[i]) && !naoZero(array[i])) {
			console.log(`trocando ${array[i]} por 0...`);
			array[i] = 0;
		} else if (naoZero(array[i])) {
			console.log('Ops, você já vale 0!');
		}
	}
	console.log(`Vetor modificado: [${array}]`);
}

substituiNumerosPares([2, 0, 3, 5, 0]);
substituiNumerosPares([]);