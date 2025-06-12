import React from "react";

const ConviteCoprodutorPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-4">🤝 Convite co-produtor (Visão produtor)</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <h3 className="text-2xl font-bold mb-4">Passo 1 - Introdução</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Saiba como enviar e gerenciar convites para co-produtores na plataforma Carrinho Digital, facilitando a colaboração.
      </p>
      <h3 className="text-xl font-semibold mb-3">📌 Por que é importante?</h3>
      <p className="mb-6 text-gray-800 leading-relaxed">
        Convites bem gerenciados garantem parcerias eficazes e crescimento conjunto.
      </p>
      <h3 className="text-xl font-semibold mb-3">🎯 O que você vai aprender?</h3>
      <ul className="list-disc list-inside mb-8 text-gray-800">
        <li>Envio de convites</li>
        <li>Gerenciamento de co-produtores</li>
        <li>Colaboração e permissões</li>
      </ul>
      <h2 className="text-lg font-semibold text-gray-700 mb-6">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1K1aACdlw0meFowTL9OP0wUeoJSXuuZu6/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Convite co-produtor"
        ></iframe>
      </div>
    </div>
  );
};

export default ConviteCoprodutorPage;