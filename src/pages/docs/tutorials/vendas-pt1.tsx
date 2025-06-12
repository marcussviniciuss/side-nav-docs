import React from "react";

const VendasPt1Page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-4">💰 Vendas - parte 1</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <h3 className="text-2xl font-bold mb-4">Passo 1 - Introdução</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Entenda os conceitos básicos de vendas na plataforma Carrinho Digital e como iniciar suas operações.
      </p>
      <h3 className="text-xl font-semibold mb-3">📌 Por que é importante?</h3>
      <p className="mb-6 text-gray-800 leading-relaxed">
        Compreender o processo de vendas é fundamental para o sucesso do seu negócio.
      </p>
      <h3 className="text-xl font-semibold mb-3">🎯 O que você vai aprender?</h3>
      <ul className="list-disc list-inside mb-8 text-gray-800">
        <li>Introdução às vendas</li>
        <li>Configuração inicial</li>
        <li>Primeiros passos</li>
      </ul>
      <h2 className="text-lg font-semibold text-gray-700 mb-6">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/100A7g6u9Di2qZMFBN_2_hF63qBjIYzP1/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Vendas - parte 1"
        ></iframe>
      </div>
    </div>
  );
};

export default VendasPt1Page;