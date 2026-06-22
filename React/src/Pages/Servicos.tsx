import FooterComponent from "./Utils/FooterComponent";
import HeaderComponent from "./Utils/HeaderComponent";
import { Link } from "react-router-dom";

//@ts-ignore
import "./Utils/MainStyle.css";
//@ts-ignore
import "./ServicosStyle.css";

export default function Servicos() {
    return (
        <>
            <HeaderComponent />

            <main>

                <section>
                    <figure>
                        <img src="../Images/Brown & Gold Playful Minimalist Pet Presentation.png" id="ad_produtos" alt="Main Image"/>
                    </figure>
                </section>
                <section className="Cachorros">
                    <h1 className="titulo_categoria"> Seu animal limpo e forte: </h1>
                    <section className="produtos_c">
                        <div className="produto">
                            <figure>
                                <img src="../Images/tosa.webp" className="imagem_produto" alt="Tosa"/>
                            </figure>
                            <h3 className="nome_produto"> Tosa </h3>
                            <p className="preco_produto"> R$ 10,00 <br /> /kg</p>
                            <button className="botao_comprar"> Comprar </button>
                        </div>
                        <div className="produto">
                            <figure>
                                <img src="../Images/banho.jpg" className="imagem_produto" alt="Banho"/>
                            </figure>
                            <h3 className="nome_produto"> Banho </h3>
                            <p className="preco_produto"> R$ 150,00 </p>
                            <button className="botao_comprar"> Comprar </button>
                        </div>
                        <div className="produto">
                            <figure>
                                <img src="../Images/Vitaminas.webp" className="imagem_produto" alt="Vitaminas"/>
                            </figure>
                            <h3 className="nome_produto"> Vitaminação </h3>
                            <p className="preco_produto"> R$ 24,99 <br /> /vitamina reposta </p>
                            <button className="botao_comprar"> Comprar </button>
                        </div>
                        <div className="produto">
                            <figure>
                                <img src="../Images/passeio.jpg" className="imagem_produto" alt="Passeio"/>
                            </figure>
                            <h3 className="nome_produto"> Passeios </h3>
                            <p className="preco_produto"> R$ 19,99 <br /> /hora </p>
                            <button className="botao_comprar"> Comprar </button>
                        </div>
                    </section>
                </section>
            </main>

            <FooterComponent />
        </>
    );
}