
const anoReferencia = new Date().getFullYear()

function consumoAlcool (anoNascimento, paisReferencia, anoReferencia){
     let idadeMinima;

     switch (paisReferencia){
        case "BR":
            idadeMinima = 18
            break
        case "EUA":
            idadeMinima = 21
            break
        case "JP":
            idadeMinima = 19
            break
        default:
            return false
     }
     
     const idadePessoa = anoReferencia - anoNascimento

     return idadePessoa >= idadeMinima
    }
    
    const podeConsumirNoBrasil = consumoAlcool(1995, "BR")
    console.log(podeConsumirNoBrasil)

    const podeConsumirNosEstates = consumoAlcool(2003, "EUA")
    console.log(podeConsumirNosEstates)

    const podeConsumirNoJapao = consumoAlcool(2006, "JP")
    console.log(podeConsumirNoJapao)

