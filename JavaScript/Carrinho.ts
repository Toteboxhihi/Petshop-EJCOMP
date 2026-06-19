export {};

interface ItemCarrinho {
    nome: string;
    preco: number;
}

function atualizarInterfaceCarrinho(): void {
    const caixaVazia = document.getElementById('caixa_compras_vazia');
    const caixaCheia = document.getElementById('caixa_compras_com_itens');
    const itensCarrinho = document.getElementById('lista_itens');
    const totalCarrinho = document.getElementById('total_carrinho');

    const carrinhoDoStorage = localStorage.getItem('carrinho');
    let carrinho: ItemCarrinho[] = carrinhoDoStorage ? JSON.parse(carrinhoDoStorage) : [];

    if (carrinho.length === 0) {
        caixaVazia?.classList.remove('escondido');
        caixaCheia?.classList.add('escondido');
    } else {
        caixaVazia?.classList.add('escondido');
        caixaCheia?.classList.remove('escondido');

        if (itensCarrinho) {
            itensCarrinho.innerHTML = '';
        }
        
        let total: number = 0;

        carrinho.forEach((item: ItemCarrinho) => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item_carrinho'); 
            itemDiv.style.margin = "10px 0px 30px 0px";
            itemDiv.innerHTML = `<span><h3>${item.nome}</h3></span> <span style="margin-left: 15px;"><h5>R$ ${item.preco.toFixed(2)}</h5></span>`;
            
            itensCarrinho?.appendChild(itemDiv);

            total += item.preco;
        });

        if (totalCarrinho) {
            totalCarrinho.innerHTML = `<h3>Total:</h3> <h5>R$ ${total.toFixed(2)}</h5>`;
        }
    }
}

function limparCarrinho(): void {
    localStorage.removeItem('carrinho');
    atualizarInterfaceCarrinho();
}

window.onload = atualizarInterfaceCarrinho;

function adicionarAoCarrinho(nome: string, preco: number): void {
    const carrinhoDoStorage = localStorage.getItem('carrinho');
    let carrinho: ItemCarrinho[] = carrinhoDoStorage ? JSON.parse(carrinhoDoStorage) : [];
    
    let produto: ItemCarrinho = { nome, preco }; 
    let quantidadeProduto: number = 0;
    
    carrinho.forEach(function(item: ItemCarrinho){ 
        if(item.nome === produto.nome && item.preco === item.preco){ 
            quantidadeProduto++;
        }
    });
    
    if(quantidadeProduto < 4){
        carrinho.push(produto);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        alert(`${nome} adicionado ao carrinho!`); 
    } else { 
        alert("Estoque vazio para esse item!");
    }
}