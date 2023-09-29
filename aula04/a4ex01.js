const filmes = [
    {
        nome: 'o senhor dos aneis: a sociedade do anel',
        genero: 'ficção',
        diretor: 'peter jackson',
        lancamento: 2001,
        atores: [
            {
                nome: 'viggo mortensen',
                personagem: 'aragorn',
            },
            {
                nome: 'orlando brum',
                personagem: 'legolas',
            },
            {
                nome: 'elijah wood',
                personagem: 'frodo',
            },
        ]
    },
    {
        nome: 'laranja mecanica',
        genero: 'ficção',
        diretor: 'stanley kubrick',
        lancamento: 1972,
        atores: [
            {
                nome: 'malcolm mcdowell',
            },
            {
                nome: 'patrick magee',
            },
            {
                nome: 'michael bates',
            },
        ]
    },
    {
        nome: 'scarface',
        genero: 'ficção',
        diretor: 'brian depalma',
        lancamento: 1983,
        atores: [
            {
                nome: 'al pacino',
            },
            {
                nome: 'michelle pfeiffer',
            },
            {
                nome: 'steven bauer',
            },
        ]
    }
]


const htmlList = document.querySelector('#filmes');

const anoReferencia = new Date().getFullYear();

for (let filme of filmes){

    const idadeFilme = anoReferencia - filme.lancamento;

    const pNome = document.createElement('p');
    pNome.textContent = `Nome do filme: ${filme.nome}`;
    htmlList.appendChild(pNome);

    const pIdade = document.createElement('p');
    pIdade.textContent = `${filme.nome} tem ${idadeFilme} anos`;
    htmlList.appendChild(pIdade);
}