import React from "react";

const CadastroLoginPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-4">📝 Cadastro e Login</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <h3 className="text-2xl font-bold mb-4">Passo 1 - Introdução</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Saiba como criar uma conta na plataforma Carrinho Digital, acessar com suas credenciais e entender os primeiros passos após o login.
      </p>
      <h3 className="text-xl font-semibold mb-3">📌 Por que é importante?</h3>
      <p className="mb-6 text-gray-800 leading-relaxed">
        Ter um cadastro correto e seguro é fundamental para garantir a melhor experiência na plataforma, além de permitir o acesso a todas as funcionalidades disponíveis.
      </p>
      <h3 className="text-xl font-semibold mb-3">🎯 O que você vai aprender?</h3>
      <ul className="list-disc list-inside mb-8 text-gray-800">
        <li>Como criar uma conta na plataforma</li>
        <li>Como acessar com suas credenciais</li>
        <li>Entender os primeiros passos após o login</li>
        <li>Dicas para manter sua conta segura</li>
      </ul>
      <h2 className="text-lg font-semibold text-gray-700 mb-6">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1K1aACdlw0meFowTL9OP0wUeoJSXuuZu6/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Cadastro e Login"
        ></iframe>
      </div>
    </div>
  );
};

export default CadastroLoginPage;