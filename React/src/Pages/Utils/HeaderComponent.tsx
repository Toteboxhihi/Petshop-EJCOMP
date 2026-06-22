import { Link } from "react-router-dom";

//@ts-ignore
import "../Utils/HeaderStyle.css";


export default function HeaderComponent(){
    return (
        <header> 
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
                            <img src="/Images/CarrinhoCompras.png" id="cart" alt="Carrinho" />
                         </Link>
                    </button>
                </section>
            </header>
);    
}
