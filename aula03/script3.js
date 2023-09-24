function calcDesconto(valorCompra, possuiConvenio, possuiCartaoLoja) {
        if (possuiConvenio && possuiCartaoLoja) {
                valorDesconto = valorCompra * 0.15
                if (valorDesconto > 100) {
                        valorDesconto = 100;
                }
                valorCompra = valorCompra - valorDesconto;
                return valorCompra
        }
        if (possuiConvenio || possuiCartaoLoja) {
                valorDesconto = valorCompra * 0.10;
                if (valorDesconto > 100) {
                        valorDesconto = 100;
                }
                valorCompra = valorCompra - valorDesconto;
                return valorCompra

        }
        return valorCompra;
}

const primeiraCompra = calcDesconto(1000, true, true);
console.log(primeiraCompra);