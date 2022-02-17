let alunos = [
  {
    nome: "Pedro",
    nota: 25,
  },
  {
    nome: "João",
    nota: 20,
  },
  {
    nome: "Iago",
    nota: 5,
  },

  {
    nome: "Cleber",
    nota: 3,
  },
  {
    nome: "Luis",
    nota: 2,
  },
];

function alunosAprovados(alunos, media) {
  let alunosAprovados = [];
  let alunosReprovados = [];

  for (let i = 0; i < alunos.length; i++) {
    let { nome, nota } = alunos[i];

    let maiorIgualMedia = nota >= media;

    if (maiorIgualMedia) {
      alunosAprovados.push(nome);
    } else if (!maiorIgualMedia) {
      alunosReprovados.push(nome);
    }
  }
  console.log(`Alunos aprovados:${alunosAprovados}
  e os alunos reprovados: ${alunosReprovados}`);
}

alunosAprovados(alunos, 5);


// Respostas:

// const alunos = [
// 	{
// 		nome: 'João',
// 		nota: 5,
// 		turma: '1B',
// 	},
// 	{
// 		nome: 'Sofia',
// 		nota: 9,
// 		turma: '1B',
// 	},
// 	{
// 		nome: 'Paulo',
// 		nota: 6,
// 		turma: '2C',
// 	},
// ];

function alunosAprovados(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 5));