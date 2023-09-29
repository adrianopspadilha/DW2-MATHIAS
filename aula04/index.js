const pessoa = {
    nome: 'adriano', 
    anoNasc: 1995,
    vegetariano: true,
    ceps: ['111111', '222222', '333333'],
    pets: [
        {
            nome: 'bonitinha',
            tipo: 'cachorro',
            vacinado: true,
        },
        {
            nome: 'mel',
            tipo: 'cachorro',
            vacinado: false,
        }
    ],
    endereco: {
            cidade: 'porto alegre',
            bairro: 'petropolis',
            numero: 2704,
            complemento: 'ap 101',
            endereco: 'lucas de oliveira'
    }
}
    //console.log(pessoa.endereco.numero)

    const {pets} = pessoa;

    for (let pet of pets){
        const {vacinado} = pet;
        if (pet.vacinado === false){
            const {nome} = pet;
            console.log(nome)
        }
    }


    