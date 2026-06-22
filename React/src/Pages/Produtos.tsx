import { Link } from "react-router-dom";
import FooterComponent from "./Utils/FooterComponent";
import HeaderComponent from "./Utils/HeaderComponent";


interface ItemCarrinho {
    nome: string;
    preco: number;
    quantidade: number;
}

function adicinarAoCarrinho(nome : string, preco : number) : void {

    let carrinho: ItemCarrinho[] = JSON.parse(localStorage.getItem('carrinho') || '[]');
    let itemExistente = carrinho.find(item => item.nome === nome && item.preco === preco);
    
    if (itemExistente) {
        // Se já existe, verificamos se o limite de 4 unidades foi atingido
        if (itemExistente.quantidade < 4) {
            itemExistente.quantidade++;
            alert(`${nome} adicionado ao carrinho! (Total: ${itemExistente.quantidade})`);
        } else {
            alert("Limite de 4 itens por produto atingido!");
            return; // Interrompe a função para não salvar à toa
        }
    } else {
        // Se é um produto novo, adicionamos ele com quantidade 1
        carrinho.push({ nome, preco, quantidade: 1 });
        alert(`${nome} adicionado ao carrinho!`);
    }

    // 4. Salva o carrinho atualizado no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

} 

export default function produtos() {
    return (
        <>
        <HeaderComponent />
        <FooterComponent />
        <header> 
            <section>
                <figure>
                    <img src="../Images/logoPet.png" id="Logo" alt="Logo Pet"/>
                </figure>           
            </section>
            <section className="botoes_topo">
                    <Link to="/Produtos">
                        <button className="botao_topo">
                            Produtos
                        </button>
                    </Link>
                    <Link to="/Servicos">
                        <button className="botao_topo">
                            Serviços
                        </button>
                    </Link>
                    <Link to="/SobreNos">
                        <button className="botao_topo">
                            Sobre nós
                        </button>
                    </Link>
                    <Link to="/OndeEstamos">
                        <button className="botao_topo">
                            Onde estamos
                        </button>
                    </Link>
                    <Link to="/Login">
                        <button className="botao_topo">
                            Login
                        </button>
                    </Link>
            </section>
            <section className="icones">
                <Link to=""> <i className="icon material-symbols-outlined">search</i> </Link>
            </section>
            <section className="icone_cart">
                <button className="botao_cart">
                     <Link to="/Carrinho">
                        <img src="../Images/CarrinhoCompras.png" id="cart"/>
                     </Link>
                </button>
            </section>
        </header>
    <main> 
        <section>
            <figure>
                <img src="../Images/Brown & Gold Playful Minimalist Pet Presentation.png" id="ad_produtos"/>
            </figure>
        </section>
        <section className="Cachorros">
            <h1 className="titulo_categoria"> Cachorros </h1>
             <section className="produtos_c">
                <div className="produto">
                    <figure>
                        <img src="../Images/Racao_Para_Cachorro_Pedigree_PNG.png" className="imagem_produto"/>
                    </figure>
                    <h3 className="nome_produto"> Ração para cães </h3>
                    <p className="preco_produto"> R$ 50,00 </p>
                    <button onClick={() => adicinarAoCarrinho('Ração para cães', 50.00)} className="botao_comprar"> Comprar </button>
                </div>
                <div className="produto">
                    <figure>
                        <img src="../Images/shampooparacaes (1).png" className="imagem_produto"/>
                    </figure>
                    <h3 className="nome_produto"> Shampoo para cães </h3>
                    <p className="preco_produto"> R$ 67,49 </p>
                    <button onClick={() => adicinarAoCarrinho('Shampoo para cães', 67.49)} className="botao_comprar"> Comprar </button>
                </div>
                <div className="produto">
                    <figure>
                        <img src="../Images/coleiraparacaes.png" className="imagem_produto"/>
                    </figure>
                    <h3 className="nome_produto"> Coleira para cães </h3>
                    <p className="preco_produto"> R$ 35,99 </p>
                    <button onClick={() => adicinarAoCarrinho('Coleira para cães', 35.99)} className="botao_comprar"> Comprar </button>
                </div>
                <div className="produto">
                    <figure>
                        <img src="../Images/perucaparacaes (1).png" className="imagem_produto"/>
                    </figure>
                    <h3 className="nome_produto"> Peruca para cães </h3>
                    <p className="preco_produto"> R$ 15,99 </p>
                    <button onClick={() => adicinarAoCarrinho('Peruca para cães', 15.99)} className="botao_comprar"> Comprar </button>
                </div>
                <div className="produto">
                    <figure>
                        <img src="../Images/brinquedoparacaes.png" className="imagem_produto"/>
                    </figure>
                    <h3 className="nome_produto"> Brinquedo para cães </h3>
                    <p className="preco_produto"> R$ 29,99 </p>
                    <button onClick={() => adicinarAoCarrinho('Brinquedo para cães', 29.99)} className="botao_comprar"> Comprar </button>
                </div>
             </section>
            
        </section>
        <section className="Gatos">
            <h1 className="titulo_categoria"> Gatos </h1>
             <section className="produtos_c">
                <div className="produto">
                    <figure>
                        <img src="../Images/Racao_Para_Cachorro_Pedigree_PNG.png" className="imagem_produto"/>
                    </figure>
                    <h3 className="nome_produto"> Ração para gatos </h3>
                    <p className="preco_produto"> R$ 50,00 </p>
                    <button onClick={() => adicinarAoCarrinho('Ração para gatos', 50.00)} className="botao_comprar"> Comprar </button>
                </div>
                <div className="produto">
                    <figure>
                        <img src="../Images/shampooparacaes (1).png" className="imagem_produto"/>
                    </figure>
                    <h3 className="nome_produto"> Shampoo para gatos </h3>
                    <p className="preco_produto"> R$ 67,49 </p>
                    <button onClick={() => adicinarAoCarrinho('Shampoo para gatos', 67.49)} className="botao_comprar"> Comprar </button>
                </div>
                <div className="produto">
                    <figure>
                        <img src="../Images/coleiraparacaes.png" className="imagem_produto"/>
                    </figure>
                    <h3 className="nome_produto"> Coleira para gatos </h3>
                    <p className="preco_produto"> R$ 35,99 </p>
                    <button onClick={() => adicinarAoCarrinho('Coleira para gatos', 35.99)} className="botao_comprar"> Comprar </button>
                </div>
                <div className="produto">
                    <figure>
                        <img src="../Images/perucaparacaes (1).png" className="imagem_produto"/>
                    </figure>
                    <h3 className="nome_produto"> Arranhadores para gatos </h3>
                    <p className="preco_produto"> R$ 15,99 </p>
                    <button onClick={() => adicinarAoCarrinho('Arranhadores para gatos', 15.99)} className="botao_comprar"> Comprar </button>
                </div>
                <div className="produto">
                    <figure>
                        <img src="../Images/brinquedoparacaes.png" className="imagem_produto"/>
                    </figure>
                    <h3 className="nome_produto"> Brinquedo para gatos </h3>
                    <p className="preco_produto"> R$ 29,99 </p>
                    <button onClick={() => adicinarAoCarrinho('Brinquedo para gatos', 29.99)} className="botao_comprar"> Comprar </button>
                </div>
             </section>
        </section>
        <section className="Peixes">
            <h1 className="titulo_categoria"> Peixes </h1>
             <section className="produtos_c">
                <div className="produto">
                    <figure>
                        <img src="../Images/Racao_Para_Cachorro_Pedigree_PNG.png" className="imagem_produto"/>
                    </figure>
                    <h3 className="nome_produto"> Ração para peixes </h3>
                    <p className="preco_produto"> R$ 50,00 </p>
                    <button onClick={() => adicinarAoCarrinho('Ração para peixes', 50.00)} className="botao_comprar"> Comprar </button>
                </div>
                <div className="produto">
                    <figure>
                        <img src="../Images/shampooparacaes (1).png" className="imagem_produto"/>
                    </figure>
                    <h3 className="nome_produto"> Aquários </h3>
                    <p className="preco_produto"> R$ 67,49 </p>
                    <button onClick={() => adicinarAoCarrinho('Aquários', 67.49)} className="botao_comprar"> Comprar </button>
                </div>
                <div className="produto">
                    <figure>
                        <img src="../Images/coleiraparacaes.png" className="imagem_produto"/>
                    </figure>
                    <h3 className="nome_produto"> Decorações para aquários </h3>
                    <p className="preco_produto"> R$ 35,99 </p>
                    <button onClick={() => adicinarAoCarrinho('Decorações para aquários', 35.99)} className="botao_comprar"> Comprar </button>
                </div>
                <div className="produto">
                    <figure>
                        <img src="../Images/perucaparacaes (1).png" className="imagem_produto"/>
                    </figure>
                    <h3 className="nome_produto"> Alimentador automático de peixes </h3>
                    <p className="preco_produto"> R$ 15,99 </p>
                    <button onClick={() => adicinarAoCarrinho('Alimentador automático de peixes', 15.99)} className="botao_comprar"> Comprar </button>
                </div>
                <div className="produto">
                    <figure>
                        <img src="../Images/brinquedoparacaes.png" className="imagem_produto"/>
                    </figure>
                    <h3 className="nome_produto"> Filtro de Aquário </h3>
                    <p className="preco_produto"> R$ 29,99 </p>
                    <button onClick={() => adicinarAoCarrinho('Filtro de Aquário', 29.99)} className="botao_comprar"> Comprar </button>
                </div>
             </section>
        </section>    
        <section className="Passaros">
            <h1 className="titulo_categoria"> Pássaros </h1>
             <section className="produtos_c">
                <div className="produto">
                    <figure>
                        <img src="../Images/Racao_Para_Cachorro_Pedigree_PNG.png" className="imagem_produto"/>
                    </figure>
                    <h3 className="nome_produto"> Ração para Pássaros </h3>
                    <p className="preco_produto"> R$ 50,00 </p>
                    <button onClick={() => adicinarAoCarrinho('Ração para Pássaros', 50.00)} className="botao_comprar"> Comprar </button>
                </div>
                <div className="produto">
                    <figure>
                        <img src="../Images/shampooparacaes (1).png" className="imagem_produto"/>
                    </figure>
                    <h3 className="nome_produto"> Gaiolas </h3>
                    <p className="preco_produto"> R$ 67,49 </p>
                    <button onClick={() => adicinarAoCarrinho('Gaiolas', 67.49)} className="botao_comprar"> Comprar </button>
                </div>
                <div className="produto">
                    <figure>
                        <img src="../Images/coleiraparacaes.png" className="imagem_produto"/>
                    </figure>
                    <h3 className="nome_produto"> Comedouro para pássaros </h3>
                    <p className="preco_produto"> R$ 35,99 </p>
                    <button onClick={() => adicinarAoCarrinho('Comedouro para pássaros', 35.99)} className="botao_comprar"> Comprar </button>
                </div>
                <div className="produto">
                    <figure>
                        <img src="../Images/perucaparacaes (1).png" className="imagem_produto"/>
                    </figure>
                    <h3 className="nome_produto"> Casa para pássaros </h3>
                    <p className="preco_produto"> R$ 15,99 </p>
                    <button onClick={() => adicinarAoCarrinho('Casa para pássaros', 15.99)} className="botao_comprar"> Comprar </button>
                </div>
                <div className="produto">
                    <figure>
                        <img src="../Images/brinquedoparacaes.png" className="imagem_produto"/>
                    </figure>
                    <h3 className="nome_produto"> Suporte para passáros </h3>
                    <p className="preco_produto"> R$ 29,99 </p>
                    <button onClick={() => adicinarAoCarrinho('Suporte para pássaros', 29.99)} className="botao_comprar"> Comprar </button>
                </div>
             </section>
        </section>
        <section className="Outros">
            <h1 className="titulo_categoria"> Outros animais </h1>
             <section className="produtos_c">
                <div className="produto">
                    <figure>
                        <img src="../Images/Racao_Para_Cachorro_Pedigree_PNG.png" className="imagem_produto"/>
                    </figure>
                    <h3 className="nome_produto"> Ração para furões </h3>
                    <p className="preco_produto"> R$ 50,00 </p>
                    <button onClick={() => adicinarAoCarrinho('Ração para furões', 50.00)} className="botao_comprar"> Comprar </button>
                </div>
                <div className="produto">
                    <figure>
                        <img src="../Images/shampooparacaes (1).png" className="imagem_produto"/>
                    </figure>
                    <h3 className="nome_produto"> Ração para lagartos </h3>
                    <p className="preco_produto"> R$ 67,49 </p>
                    <button onClick={() => adicinarAoCarrinho('Ração para lagartos', 67.49)} className="botao_comprar"> Comprar </button>
                </div>
                <div className="produto">
                    <figure>
                        <img src="../Images/coleiraparacaes.png" className="imagem_produto"/>
                    </figure>
                    <h3 className="nome_produto"> Ração para tartarugas </h3>
                    <p className="preco_produto"> R$ 35,99 </p>
                    <button onClick={() => adicinarAoCarrinho('Ração para tartarugas', 35.99)} className="botao_comprar"> Comprar </button>
                </div>
                <div className="produto">
                    <figure>
                        <img src="../Images/perucaparacaes (1).png" className="imagem_produto"/>
                    </figure>
                    <h3 className="nome_produto"> Ração para hamsters </h3>
                    <p className="preco_produto"> R$ 15,99 </p>
                    <button onClick={() => adicinarAoCarrinho('Ração para hamsters', 15.99)} className="botao_comprar"> Comprar </button>
                </div>
                <div className="produto">
                    <figure>
                        <img src="../Images/brinquedoparacaes.png" className="imagem_produto"/>
                    </figure>
                    <h3 className="nome_produto"> ração para T-rex </h3>
                    <p className="preco_produto"> R$ 29,99 </p>
                    <button onClick={() => adicinarAoCarrinho('Ração para T-rex', 29.99)} className="botao_comprar"> Comprar </button>
                </div>
             </section>
        </section>
    </main>

    <footer>
        <div className="footer_cima">
            <section className="logos_baixo">
                <button className="logo_baixo">
                    <figure>
                        <img src="../Images/whatsapp.png" id="Logo_baixo"/>
                    </figure>
                </button>
                <button className="logo_baixo">
                    <figure>
                        <img src="../Images/facebook.png" id="Logo_baixo"/>
                    </figure>
                </button>
                <button className="logo_baixo">
                    <figure>
                        <img src="../Images/instagram.png" id="Logo_baixo"/>
                    </figure>
                </button>
            </section>
            <section className="botoes_baixo">
                <Link to="Home">
                    <button className="botao_baixo">
                        Home
                    </button>
                </Link>
                <Link to="SobreNos">
                    <button className="botao_baixo">
                        Sobre nós
                    </button>
                </Link>
                <Link to="OndeEstamos">
                    <button className="botao_baixo">
                        Contatos
                    </button>
                </Link>
            </section>
        </div>
        
        <div>
        <section className="footer_baixo">
            <p className="footer_texto">
                Copyright © 2024 EJPET. Todos os direitos reservados.
            </p>
        </section>
        </div>
    </footer>
    </>
    )
}