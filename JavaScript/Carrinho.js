function atualizarInterfaceCarrinho() {
    const caixaVazia = document.getElementById('caixa_compras_vazia');
    const caixaCheia = document.getElementById('caixa_compras_com_itens');
    const itensCarrinho = document.getElementById('lista_itens');
    const totalCarrinho = document.getElementById('total_carrinho');

    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    if (carrinho.length === 0) {
        caixaVazia.classList.remove('escondido');
        caixaCheia.classList.add('escondido');
    }
    else {
        caixaVazia.classList.add('escondido');
        caixaCheia.classList.remove('escondido');

        itensCarrinho.innerHTML = '';
        let total = 0;

        carrinho.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item_carrinho');
            itemDiv.innerHTML = `<span>${item.nome}</span> <span>R$ ${item.preco.toFixed(2)}</span>`;
            itensCarrinho.appendChild(itemDiv);

            total += item.preco;
        })

        totalCarrinho.innerHTML = `Total: R$ ${total.toFixed(2)}`;
    }

}

function limparCarrinho() {
            localStorage.removeItem('carrinho');
            atualizarInterfaceCarrinho(); // Renderiza novamente para voltar ao estado "Vazio"
        }

    // Executa a checagem assim que a página carrega
    window.onload = atualizarInterfaceCarrinho;

function adicionarAoCarrinho(nome, preco) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push({ nome, preco });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(`${nome} adicionado ao carrinho!`);
}
