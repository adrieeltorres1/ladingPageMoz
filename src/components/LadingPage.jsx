import React from "react";

const Ladingpage = () => {
    return (
        <>
            <div className="relative w-full h-screen max-h-96">
                <img src='../src/assets/imagemUp.jpg' alt="Imagem" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <h1 className="text-xl  text-white p-4">Seja bem-vindo a FB FARMS</h1>
                </div>
            </div>
            
            <div className="m-5">
                <h2>Sobre</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ratione ipsum a doloremque sunt est illo nemo, autem veritatis odit similique fugit dolore nisi recusandae eos. Necessitatibus temporibus obcaecati non?</p>
            </div>
        </>
    );
}

export default Ladingpage;
