import FooterComponent from "./Utils/FooterComponent";
import HeaderComponent from "./Utils/HeaderComponent";
import { Link } from "react-router-dom";

//@ts-ignore
import "./LoginStyle.css";
//@ts-ignore
import "./Utils/MainStyle.css";

export default function Login() {
    return (
    <>
        <HeaderComponent />
        
          
            <section className="containerLogin">
                <form id="loginForm">  
                    <img src="../Images/logoPet.png" className="logoLogin" alt="Logo Petshop"/>
                    <section className="containerTitulo"> 
                        <h1>Login da sua conta</h1>
                    </section>
                    <section className="containerInput">
                        <label htmlFor="Email"> <h2> Email </h2> </label>
                        <input id="Email" type="text" className="text_input" /> 
                    </section>
                    <section className="containerInput">
                        <label htmlFor="Senha"> <h2>Senha </h2> </label>
                        <input id="Senha" type="password" className="text_input" /> 
                    </section>    
                    <section className="containerLembrarDeMim">
                        <input id="Lembrar" type="checkbox" />  
                        <label htmlFor="Lembrar"> <h6> Lembrar de mim? </h6> </label> 
                    </section>
                    <section className="containerInput"> 
                        <button id="buttonEntrar"> 
                            <h4>Entrar</h4>
                        </button> 
                        <h6> Não tem cadastro? Cadastre-se aqui</h6>
                    </section>          
                </form> 
            </section>
        

        <FooterComponent />
    </>
    );
}