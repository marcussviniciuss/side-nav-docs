import React from "react";

const OfertaPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-4">🎁 Oferta</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <h3 className="text-2xl font-bold mb-4">Passo 1 - Introdução</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Entenda como criar e gerenciar ofertas na plataforma Carrinho Digital para aumentar suas vendas e atrair clientes.
      </p>
      <h3 className="text-xl font-semibold mb-3">📌 Por que é importante?</h3>
      <p className="mb-6 text-gray-800 leading-relaxed">
        Ofertas bem estruturadas ajudam a promover produtos e aumentar a conversão.
      </p>
      <h3 className="text-xl font-semibold mb-3">🎯 O que você vai aprender?</h3>
      <ul className="list-disc list-inside mb-8 text-gray-800">
        <li>Criação de ofertas</li>
        <li>Configuração de descontos</li>
        <li>Promoções e campanhas</li>
      </ul>
      <h2 className="text-lg font-semibold text-gray-700 mb-6">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1SstSr66TcczR66ar1f8SYjdztSDaahTq/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Oferta"
        ></iframe>
      </div>
    </div>
  );
};

export default OfertaPage;