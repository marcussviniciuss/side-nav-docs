import React from "react";

const LojasPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-4">🏬 Lojas</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <h3 className="text-2xl font-bold mb-4">Passo 1 - Introdução</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Aprenda a configurar e gerenciar lojas na plataforma Carrinho Digital para expandir suas vendas e operações.
      </p>
      <h3 className="text-xl font-semibold mb-3">📌 Por que é importante?</h3>
      <p className="mb-6 text-gray-800 leading-relaxed">
        Gerenciar lojas ajuda a organizar produtos, clientes e vendas de forma eficiente, melhorando o crescimento do negócio.
      </p>
      <h3 className="text-xl font-semibold mb-3">🎯 O que você vai aprender?</h3>
      <ul className="list-disc list-inside mb-8 text-gray-800">
        <li>Configuração de lojas</li>
        <li>Gerenciamento de produtos e inventário</li>
        <li>Integração com outras funcionalidades</li>
      </ul>
      <h2 className="text-lg font-semibold text-gray-700 mb-6">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1oI5YdAa5_Q5VOW5s0n2qlt2InTjikxSU/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Lojas"
        ></iframe>
      </div>
    </div>
  );
};

export default LojasPage;