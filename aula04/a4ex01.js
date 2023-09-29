const filmes = [
    {
        nome: 'senhor dos aneis',
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
        lancamento: 1969,
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
        lancamento: 1984,
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

const idadeFilme = anoReferencia - filmes.lancamento;

for (let filme of filmes){
    const p = document.createElement('p');
    p.textContent = filme.nome;
    htmlList.appendChild(p);
}
for (let filme of filmes){
    const p = document.createElement('p');
    p.textContent = filme.idadeFilme;
    htmlList.appendChild(p);
}