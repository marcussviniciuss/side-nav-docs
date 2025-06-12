import React from "react";

const MinhasCoproducoesPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-4">🤝 Minhas co-produções (Visão co-produtor)</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <h3 className="text-2xl font-bold mb-4">Passo 1 - Introdução</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Saiba como gerenciar suas co-produções na plataforma Carrinho Digital, colaborando com produtores para maximizar resultados.
      </p>
      <h3 className="text-xl font-semibold mb-3">📌 Por que é importante?</h3>
      <p className="mb-6 text-gray-800 leading-relaxed">
        Gerenciar co-produções de forma eficiente fortalece parcerias e aumenta o sucesso conjunto.
      </p>
      <h3 className="text-xl font-semibold mb-3">🎯 O que você vai aprender?</h3>
      <ul className="list-disc list-inside mb-8 text-gray-800">
        <li>Visualização de co-produções</li>
        <li>Gestão de permissões</li>
        <li>Colaboração e comunicação</li>
      </ul>
      <h2 className="text-lg font-semibold text-gray-700 mb-6">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1vWzem1NV6F1MOj9t2h7fmgRicFcxr6Kl/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Minhas co-produções"
        ></iframe>
      </div>
    </div>
  );
};

export default MinhasCoproducoesPage;