var itens = [];


document.querySelector('input[type=submit]').addEventListener("click", function () {
        var nomeProduto = document.querySelector("input[name=produto]");
        var quantidadeProduto = document.querySelector('input[name=quantidade]');
        var priceProduto = document.querySelector('input[name=price]');

        itens.push({
            nome:nomeProduto.value == '' ? 'Não Informado' : nomeProduto.value,
            quantidade:quantidadeProduto.value == '' ? 1 : quantidadeProduto.value,
            price:priceProduto.valu == '' ? 0 : priceProduto.value * quantidadeProduto.value
        });

        let listaProdutos = document.querySelector('.table');
        let soma = 0;
        listaProdutos.innerHTML = '';
        itens.map(function(value){
            soma += parseFloat(value.price);
            listaProdutos.innerHTML += `
            <tr>
          <td class="title-table">${value.nome}</td>
          <td class="quant">${value.quantidade} qtd</td>
          <td class="price">R$ ${value.price}</td>
        </tr>
            `
        });
        soma = soma.toFixed(2);
        nomeProduto.value = '';
        quantidadeProduto.value = '';
        priceProduto.value = '';

        let elementoSoma = document.querySelector('.soma');
        elementoSoma.innerHTML = 'R$'+soma;
        
    });

document.querySelector('.clear')
.addEventListener('click',()=>{
    itens = [];
    
    document.querySelector('.table').innerHTML = "";
    document.querySelector('.soma').innerHTML= "R$ 0";
});