import React from "react";

const IndiqueGanheSaquePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-4">💰 Indique e Ganhe (Saque)</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <h3 className="text-2xl font-bold mb-4">Passo 1 - Introdução</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Saiba como gerenciar os saques do programa Indique e Ganhe na plataforma Carrinho Digital para garantir pagamentos corretos.
      </p>
      <h3 className="text-xl font-semibold mb-3">📌 Por que é importante?</h3>
      <p className="mb-6 text-gray-800 leading-relaxed">
        Uma boa gestão dos saques assegura a confiança dos participantes e a transparência do programa.
      </p>
      <h3 className="text-xl font-semibold mb-3">🎯 O que você vai aprender?</h3>
      <ul className="list-disc list-inside mb-8 text-gray-800">
        <li>Processo de saque</li>
        <li>Controle financeiro</li>
        <li>Relatórios e auditoria</li>
      </ul>
      <h2 className="text-lg font-semibold text-gray-700 mb-6">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1lHqgEyg8zwAhyEoospr62xWMryp4lLr_/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Indique e Ganhe (Saque)"
        ></iframe>
      </div>
    </div>
  );
};

export default IndiqueGanheSaquePage;