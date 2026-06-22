import { Link } from "react-router-dom";

//@ts-ignore
import "../Utils/FooterStyle.css";


export default function FooterComponent(){
    return (
        <footer>
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
    );
}