import React from "react";

const VendasPt4Page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-4">💰 Vendas - parte 4</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Continue aprendendo</h2>
      <h3 className="text-2xl font-bold mb-4">Passo 4 - Finalização</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Aprenda as etapas finais para consolidar suas vendas e garantir a satisfação do cliente na plataforma Carrinho Digital.
      </p>
      <h3 className="text-xl font-semibold mb-3">📌 Por que é importante?</h3>
      <p className="mb-6 text-gray-800 leading-relaxed">
        Finalizar corretamente o processo de vendas é essencial para manter a confiança e fidelidade dos clientes.
      </p>
      <h3 className="text-xl font-semibold mb-3">🎯 O que você vai aprender?</h3>
      <ul className="list-disc list-inside mb-8 text-gray-800">
        <li>Confirmação de pedidos</li>
        <li>Gestão de entregas</li>
        <li>Atendimento pós-venda</li>
      </ul>
      <h2 className="text-lg font-semibold text-gray-700 mb-6">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1YRHOxW2A5IuCsK-pVSucb7mgJRPQ6Q_D/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Vendas - parte 4"
        ></iframe>
      </div>
    </div>
  );
};

export default VendasPt4Page;