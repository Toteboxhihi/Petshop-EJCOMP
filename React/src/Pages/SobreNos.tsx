import FooterComponent from "./Utils/FooterComponent";
import HeaderComponent from "./Utils/HeaderComponent";
import { Link } from "react-router-dom";

// @ts-ignore
import './SobreNosStyle.css';
//@ts-ignore
import "./Utils/MainStyle.css";

export default function SobreNos() {
    return (
            <>
            <HeaderComponent />
 
            <section className="historia"> 
                <section> 
                    <h1 className="titulosSobreNosAmarelo"> <b>A História por trás da EJPET</b> </h1>
                </section>
                <section className="textoDescricaoAmarelo"> 
                    <h3> Na EJPET, nós não acreditamos que pets são apenas animais de estimação. Para nós, eles são membros da família, confidentes, fontes de alegria diária e, sejamos sinceros, os verdadeiros donos da casa. </h3>
                </section>  
                <section className="imagemSection"> 
                    <img src="../Images/imagemHistoria1.jpeg" width="20%" height="20%" className="imagem"/> 
                    <img src="../Images/imagemHistoria2.jpg" width="20%" height="20%" className="imagem"/>  
                    <img src="../Images/imagemHistoria3.jpg" width="20%" height="20%" className="imagem"/> 
                </section>
                <section className="textoDescricaoAmarelo"> 
                    <h3> Nascemos com uma missão simples, mas poderosa: oferecer o cuidado, o respeito e o carinho que o seu melhor amigo merece, em cada banho, consulta ou escolha de petisco. </h3>
                </section>
            </section> 

            <section className="container-pilar">
                <h1 className="titulosSobreNosRoxo"> Nossos Pilares! </h1>
                <section className="pilares"> 
                    <section className="pilar"> 
                        <h1 className="tituloPilar"> Amor em Primeiro Lugar </h1> 
                        <img src="../Images/pilares1.jpg" width="70%" height="70%" className="imagem"/>   
                        <section className="textoDescricaoAmarelo">
                            <h3> Tratamos cada pet como se fosse nosso. O bem-estar físico e emocional deles vem sempre antes de qualquer coisa. </h3> 
                        </section>
                    </section> 
                    <section className="pilar"> 
                        <h1 className="tituloPilar"> Transparência </h1>   
                        <img src="../Images/pilares2.jpg" width="80%" height="50%" className="imagem"/>   
                        <section className="textoDescricaoAmarelo">
                            <h3> Você sempre sabe como seu pet está sendo tratado. Portas abertas e comunicação clara são a nossa regra. </h3> 
                        </section>
                    </section> 
                    <section className="pilar"> 
                        <h1 className="tituloPilar"> Qualidade e Segurança </h1>  
                        <img src="../Images/pilares3.jpg" width="70%" height="70%" className="imagem"/>     
                        <section className="textoDescricaoAmarelo">  
                            <h3> Da escolha das rações aos produtos de higiene, tudo na EJPET passa por uma curadoria rigorosa. </h3> 
                        </section>  
                    </section>
                </section> 
            </section>

            <section className="integrantes"> 
                <section> 
                    <h1 className="titulosSobreNosRoxo"> <b>Conheça um pouco mais sobre nós!</b> </h1>
                </section>
                <section className="fotosIntegrantes"> 
                <div className="membro"> 
                    <img src="../Images/lucao.jpeg" className="imagem-membro"/> 
                    <h2> Lucas Pereira </h2> 
                    <h5> Uma descrição muito daora sobre o Lucas estará aqui :) </h5>
                </div> 
                <div className="membro"> 
                    <img src="../Images/brumatti.jpeg" className="imagem-membro"/> 
                    <h2> Felipe Brumatti </h2> 
                    <h5> Uma descrição muito daora sobre o Brumatti estará aqui :) </h5>
                </div>  
                <div className="membro"> 
                    <img src="../Images/alvarin.jpeg" className="imagem-membro"/> 
                    <h2> Álvaro de Freitas Grotto </h2> 
                    <h5> Uma descrição muito daora sobre o Álvaro estará aqui :) </h5>
                </div> 
                </section>
            </section>
        

        <FooterComponent />
        
        </>
        
    );
}