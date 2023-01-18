const listaDeAlunos = [
    {
        nome: 'Miguel Sabino',
        nota1: '7',
        nota2: '6',
        nota3: '9',
        nota4: '2.5'
    }
    {
        nome: 'Anderson Costa',
        nota1: '7',
        nota2: '6',
        nota3: '6',
        nota4: '5.5'
    }
    {
        nome: 'Raist',
        nota1: '8',
        nota2: '7',
        nota3: '7',
        nota4: '6'
    }
]

// Maior nota de cada aluno
// Média do ano de cada aluno
//Situação de cada aluno

const novaListaDosAlunos = listaDeAlunos.map(aluno => {
    console.log(aluno.nome)
    return aluno.nome
})