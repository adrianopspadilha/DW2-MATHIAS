function calcDesconto(valorCompra, possuiConvenio, possuiCartaoLoja){
        if (possuiConvenio && pagamentoCartaoLoja) {
        valorDesconto = valorCompra * 0.15
        if (valorDesconto > 100) {
        valorDesconto = 100;
        }
        valorCompra = valorCompra - valorDesconto;
        return valorCompra
        }
        if (possuiConvenio || pagamentoCartaoLoja) {
        valorDesconto = valorCompra * 0.10;
        if (valorDesconto > 100) {
        valorDesconto = 100;
        }
        valorCompra = valorCompra - valorDesconto;
        return valorCompra
        
        }
        return valorCompra;
        }
        
        const primeiraCompra = convenioFarmacia(2000, true, true);
        console.log(primeiraCompra);