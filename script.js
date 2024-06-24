fetch('http://localhost:3000/produtos')
.then(requ => requ.json())
.then((data) => mostraProdutos(data));

function mostraProdutos(produtos){
    const htmlProdutos = produtos.map(
        (produto) => `
                <div id="cartoes">
                    <img src="${produto.image}" alt="" id="produto_img">
                    <p id="card_name">${produto.name}</p>
                    <div>
                        <p id="card_valor">$ ${produto.price}</p>
                        <img src="" alt="" id="lixo">
                    </div>
                </div>
                `
    )

    document.getElementById('card').innerHTML = htmlProdutos;
}

