import React from "react";

const WebhooksLogsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-4">🔗 Webhooks + Logs</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <h3 className="text-2xl font-bold mb-4">Passo 1 - Introdução</h3>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Saiba como configurar webhooks e monitorar logs na plataforma Carrinho Digital para integrar e acompanhar eventos.
      </p>
      <h3 className="text-xl font-semibold mb-3">📌 Por que é importante?</h3>
      <p className="mb-6 text-gray-800 leading-relaxed">
        Webhooks e logs permitem automação e monitoramento eficiente, garantindo a integração correta dos sistemas.
      </p>
      <h3 className="text-xl font-semibold mb-3">🎯 O que você vai aprender?</h3>
      <ul className="list-disc list-inside mb-8 text-gray-800">
        <li>Como configurar webhooks</li>
        <li>Monitoramento e análise de logs</li>
        <li>Resolução de problemas e alertas</li>
      </ul>
      <h2 className="text-lg font-semibold text-gray-700 mb-6">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1ikK5qVG6zO4BhkUc85kvnBvaLXPHSggK/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Webhooks e Logs"
        ></iframe>
      </div>
    </div>
  );
};

export default WebhooksLogsPage;