import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePhoneFlip } from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"

const Ladingpage = () => {
    return (
        <>
            <div className="relative w-full h-screen max-h-96">
                <img src='/imagemUp.jpg' alt="Imagem" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center flex-col">
                    <h1 className="text-xl text-white p-4">Seja bem-vindo a FB Farms Business</h1>
                    <div className="absolute bottom-8">
                        <img className="w-12 h-12 animate-pulse animate__animated animate__fast" src="/arrow-down.png" alt="" />
                    </div>
                </div>
            </div>
            <section className="m-5">
                <h2 className="text-2xl"><strong>Quem somos</strong></h2>
                <p className="text-justify text-lg md:text-lg lg:text-xl">Na FB Farms Business, nossa missão é fornecer frangos vivos e depenados de qualidade excepcional, sempre priorizando o bem-estar dos nossos clientes e a satisfação de suas necessidades. Com um compromisso inabalável com a excelência, cultivamos nossos frangos em ambientes que respeitam os mais altos padrões de cuidado e nutrição, garantindo produtos saudáveis e de confiança.</p>
                <div>
                    <ScrollAnimation animateIn="animate__fadeInLeft">
                        <img className="w-[350px] rounded-lg mt-4 shadow-md" src='/chickenAbout.jpg' alt="" />
                    </ScrollAnimation>
                </div>
            </section>
            <img className="w-[100px] m-auto" src='/fiveStars.png' alt="" />
            <section className="m-5">
                <h2 className="text-2xl"><strong>Valores</strong></h2>
                <div>
                    <p className="text-justify text-lg">
                    Nosso foco é proporcionar uma experiência única e satisfatória para cada cliente, oferecendo frangos que atendem aos critérios mais exigentes de qualidade e frescor. <img className="w-[100px] float-right ml-3 mt-2" src='/valueRoundedfull.png' alt="" />Acreditamos que o cuidado começa desde a criação até a entrega, assegurando que cada frango seja criado com responsabilidade e atenção aos detalhes. Comprometemo-nos a seguir as melhores práticas de sustentabilidade e bem-estar animal.
                    </p>
                    <button className="flex gap-2 items-center bg-green-500 text-gray-50 text-lg font-bold py-2 px-4 rounded-full hover:bg-green-800 transition duration-400 mt-6 cursor-pointer border-2 shadow md:shadow-xl">
                        <FontAwesomeIcon icon={faSquarePhoneFlip} style={{ color: "#fff7f7" }} />
                        <a href="https://api.whatsapp.com/send?phone=+258844192826&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais.%20%F0%9F%90%94%F0%9F%98%83">Entrar em contato</a> 
                    </button>
                </div>
            </section>
            <section className="flex flex-wrap gap-4 gap-y-5 my-10 justify-center mt-10">
                <ScrollAnimation animateIn="animate__fadeInLeft">
                    <div className="flex flex-col gap-y-5 mt-8">
                        <img className="w-[150px] h-[150px] object-cover rounded-lg shadow-lg" src='/firstImage.jpg' alt="Imagem 1" />
                        <img className="w-[150px] h-[150px] object-cover rounded-lg shadow-lg" src='/secondImage.jpg' alt="Imagem 2" />
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInRight">
                    <div className="flex flex-col gap-y-5">
                        <img className="w-[150px] h-[150px] object-cover rounded-lg shadow-lg" src='/thirdImage.jpg' alt="Imagem 3" />
                        <img className="w-[150px] h-[150px] object-cover rounded-lg shadow-lg" src='/fourthImage.jpg' alt="Imagem 4" />
                    </div>
                </ScrollAnimation>
            </section>
            <section className="m-5">
                <ScrollAnimation animateIn="animate__fadeInUp">
                    <h2 className="flex justify-center text-lg"><strong>Não Perca Tempo, Garanta o Seu!</strong></h2>
                </ScrollAnimation>
            </section>

            <footer className="bg-gray-700 text-white p-4 mt-10">
                <div className="flex flex-col items-center">
                    <div className="text-center">
                        <p>&copy; 2025 FB Farms Businesses. Todos os direitos reservados.</p>
                        <p><a href="https://www.linkedin.com/in/adriel-torres-9a421a27b/">
                        Desenvolvido com ❤️ por <u>Adriel Torres</u></a></p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Ladingpage;
