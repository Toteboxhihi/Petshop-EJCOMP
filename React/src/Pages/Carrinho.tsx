import { useState, useEffect } from "react";
import FooterComponent from "./Utils/FooterComponent";
import HeaderComponent from "./Utils/HeaderComponent";   
import { Link } from "react-router-dom"; 

// @ts-ignore
import './CarrinhoStyle.css';

interface Produto {
    nome: string;
    preco: number;
}

export default function Carrinho() {
    const [carrinho, setCarrinho] = useState<Produto[]>([]);

    useEffect(() => {
        const carrinhoStorage = localStorage.getItem('carrinho');
        if (carrinhoStorage) {
            setCarrinho(JSON.parse(carrinhoStorage));
        }
    }, []);

    const limparCarrinho = (): void => {
        localStorage.removeItem('carrinho');
        setCarrinho([]);
    };

    const total = carrinho.reduce((acumulador, item) => acumulador + item.preco, 0);

    return (
        <>
            <HeaderComponent />
            <main>
                <section className="lista_compras">
                    <h1 className="titulo_compras">Seu Carrinho</h1>

                    {carrinho.length === 0 ? (
                        <div id="caixa_compras_vazia">
                            <img src="../Images/cesta-vazia.png" id="cesta_vazia" alt="Cesta de compras vazia" />
                            <p className="texto_compras">Seu carrinho está vazio. Adicione produtos para começar a comprar!</p>
                        </div>
                    ) : (
                        <div id="caixa_compras_com_itens">
                            <div id="lista_itens">
                                {carrinho.map((item, index) => (
                                    <div key={index} className="item_carrinho" style={{ margin: "10px 0px 30px 0px" }}>
                                        <span><h3>{item.nome}</h3></span> 
                                        <span style={{ marginLeft: "15px" }}><h5>R$ {item.preco.toFixed(2)}</h5></span>
                                    </div>
                                ))}
                            </div>

                            <div className="total" id="total_carrinho">
                                <h3>Total:</h3> <h5>R$ {total.toFixed(2)}</h5>
                            </div>

                            <div className="botoes" id="botaoEsvaziar">
                                <button className="limpar" onClick={limparCarrinho}>Esvaziar Carrinho</button>
                            </div>
                        </div>
                    )}
                </section>
            </main> 
            <FooterComponent />
        </>
    );
}

