const pessoa1 ={
    nome: 'Pedro',
    idade: 20
}

const pessoa2 = {
    nome: 'clara',
    idade: 25
}


function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(pessoa1, 2));

console.log(calculaIdade.call(pessoa2, 2));

console.log(calculaIdade.apply(pessoa1, [2]));

console.log(calculaIdade.apply(pessoa2, [2]));


// Respostas:

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Amelia',
	idade: 23,
};

const pessoa2 = {
	nome: 'Márcia',
	idade: 20,
};

const pessoa3 = {
	nome: 'Jonas',
	idade: 13,
};

console.log(calculaIdade.call(pessoa3, 40));
console.log(calculaIdade.apply(pessoa2, [24]));