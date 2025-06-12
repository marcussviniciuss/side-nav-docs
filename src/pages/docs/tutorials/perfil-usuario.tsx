import React from "react";

const PerfilUsuarioPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-4">👤 Perfil de Usuário</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <h3 className="text-2xl font-bold mb-4">Passo 1 - Introdução</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Saiba como gerenciar seu perfil de usuário na plataforma Carrinho Digital, incluindo atualização de informações e configurações.
      </p>
      <h3 className="text-xl font-semibold mb-3">📌 Por que é importante?</h3>
      <p className="mb-6 text-gray-800 leading-relaxed">
        Manter seu perfil atualizado garante uma melhor experiência e acesso a funcionalidades personalizadas.
      </p>
      <h3 className="text-xl font-semibold mb-3">🎯 O que você vai aprender?</h3>
      <ul className="list-disc list-inside mb-8 text-gray-800">
        <li>Atualização de dados pessoais</li>
        <li>Configurações de conta</li>
        <li>Preferências e notificações</li>
      </ul>
      <h2 className="text-lg font-semibold text-gray-700 mb-6">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1OljrrOm0lSDSSvm1fKBr5qOyhBk5ZG1f/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Perfil de Usuário"
        ></iframe>
      </div>
    </div>
  );
};

export default PerfilUsuarioPage;