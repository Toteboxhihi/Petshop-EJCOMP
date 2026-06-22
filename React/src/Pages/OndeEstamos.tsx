import FooterComponent from "./Utils/FooterComponent";
import HeaderComponent from "./Utils/HeaderComponent";
import { Link } from "react-router-dom";

//@ts-ignore
import "./OndeEstamosStyle.css";
//@ts-ignore
import "./Utils/MainStyle.css";


export default function OndeEstamos() {
    return (
        <>
            <HeaderComponent />
            
            <main>
             
                <h1 className="title">Onde Estamos:</h1>
                <h2 className="subtitle"> Endereço: </h2>
                <section id="Endereco" >
                    <h4 className="text_info">
                        R. Roberto Símonsen, 305 - Jardim das Rosas, Pres. Prudente - SP, 19060-080
                    </h4>
                </section>
                <section id="Mapa">
                    <div className="mapa">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.136828122191!2d-51.41062272481449!3d-22.120758210252685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f43fa3f61537%3A0x22b963f6a672bba1!2sEJCOMP%20-%20Empresa%20J%C3%BAnior%20de%20Computa%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1779129210266!5m2!1spt-BR!2sbr"
                         id="iFrameMapa" allowFullScreen={true}
                        loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mapa"></iframe>
                    </div>
                    <div className="mapa horario">
                        <h3> 
                            Leve o seu pet para quem entende de animais... NÓS!
                            <br /> <br /> <br />
                            Trabalhamos em todos os dias do ano que não terminam com 'A' ou 'O'!
                            <br /><br /><br />
                            Agende sua visita no melhor petshop do Brasil-sil-sil!!!
                        </h3>
                    </div>
                </section>
                <section className="contato">
                    <h2 className="subtitle">Entre em Contato:</h2>
                    <section id="Contatos">
                        <h4 className="text_info">
                            Whatsapp:
                            (99) 99999-9999
                        </h4>
                        <h4 className="text_info">
                            Fixo:
                            (99) 9999-9999 
                        </h4>
                        <h4 className="text_info">
                            Intagram: 
                            @ejcompunesp
                        </h4>
                        <h4 className="text_info">
                            Linkedin:
                            @ejcompunesp
                        </h4>
                    </section>
                </section>
            </main>

            <FooterComponent />
        </>
    );
}