import { Link } from "react-router-dom";
// @ts-ignore
import './HomeStyle.css';
// @ts-ignore
import './Utils/FooterStyle.css';

import HeaderComponent from "./Utils/HeaderComponent";
import FooterComponent from "./Utils/FooterComponent";

export default function Home() {
    return (
        <>
            <HeaderComponent />
{/*            <header> 
                <section>
                    <figure>
                        <img src="../Images/logoPet.png" id="Logo" alt="Logo Pet" />
                    </figure>           
                </section>
                <section className="botoes_topo">
                    <Link to="/Produtos">
                        <button className="botao_topo">Produtos</button>
                    </Link>
                    <Link to="/Servicos">
                        <button className="botao_topo">Serviços</button>
                    </Link>
                    <Link to="/SobreNos">
                        <button className="botao_topo">Sobre nós</button>
                    </Link>
                    <Link to="/OndeEstamos">
                        <button className="botao_topo">Onde estamos</button>
                    </Link>
                    <Link to="/Login">
                        <button className="botao_topo">Login</button>
                    </Link>
                </section>
                <section className="icones">
                    <span className="icon material-symbols-outlined">search</span>
                </section>
                <section className="icone_cart">
                    <button className="botao_cart">
                         <Link to="/Carrinho">
                            <img src="../Images/CarrinhoCompras.png" id="cart" alt="Carrinho" />
                         </Link>
                    </button>
                </section>
            </header>
            */}
            <main> 
                <section>
                    <figure className="figura_frente">
                        <img src="../Images/frente_petshop.png" id="frente_petshop" alt="Frente Petshop" />
                    </figure>
                </section>    
            </main>
            
            <FooterComponent />
{
/*            <footer>
                <div className="footer_cima">
                    <section className="logos_baixo">
                        <button className="logo_baixo">
                            <figure>
                                <img src="../Images/whatsapp.png" id="Logo_baixo" alt="Whatsapp" />
                            </figure>
                        </button>
                        <button className="logo_baixo">
                            <figure>
                                <img src="../Images/facebook.png" id="Logo_baixo" alt="Facebook" />
                            </figure>
                        </button>
                        <button className="logo_baixo">
                            <figure>
                                <img src="../Images/instagram.png" id="Logo_baixo" alt="Instagram" />
                            </figure>
                        </button>
                    </section>
                    <section className="botoes_baixo">
                        <Link to="/">
                            <button className="botao_baixo">Home</button>
                        </Link>
                        <Link to="/SobreNos">
                            <button className="botao_baixo">Sobre nós</button>
                        </Link>
                        <Link to="/OndeEstamos">
                            <button className="botao_baixo">Nos contate</button>
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
            */}
    </>
    );
}