import React from "react";

const VendasPt2Page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-4">💰 Vendas - parte 2</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Continue aprendendo</h2>
      <h3 className="text-2xl font-bold mb-4">Passo 2 - Avançado</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Explore funcionalidades avançadas de vendas na plataforma Carrinho Digital para otimizar suas operações.
      </p>
      <h3 className="text-xl font-semibold mb-3">📌 Por que é importante?</h3>
      <p className="mb-6 text-gray-800 leading-relaxed">
        Conhecer recursos avançados permite maximizar resultados e eficiência.
      </p>
      <h3 className="text-xl font-semibold mb-3">🎯 O que você vai aprender?</h3>
      <ul className="list-disc list-inside mb-8 text-gray-800">
        <li>Gestão avançada de vendas</li>
        <li>Automatizações e integrações</li>
        <li>Relatórios detalhados</li>
      </ul>
      <h2 className="text-lg font-semibold text-gray-700 mb-6">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/14F4dqR1r_g1YcJRs019P0QGs6d_8iCfa/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Vendas - parte 2"
        ></iframe>
      </div>
    </div>
  );
};

export default VendasPt2Page;