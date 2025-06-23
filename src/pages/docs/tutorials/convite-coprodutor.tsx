import React from "react";

const ConviteCoprodutorPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">📺 Live</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Transmissões ao Vivo</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda como criar, configurar e gerenciar transmissões ao vivo para engajar seus alunos em tempo real.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Configuração de Live</h2>
          <p className="mb-4">
            Para criar uma transmissão ao vivo:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Título da live</strong> - Nome atrativo para a transmissão</li>
            <li><strong>Data e horário</strong> - Agende quando será transmitida</li>
            <li><strong>Descrição</strong> - O que será abordado na live</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Ferramentas de Transmissão</h2>
          <p className="mb-4">
            Recursos disponíveis durante a live:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Chat ao vivo</strong> - Interação com a audiência</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1hhPrU9CqfKsyw7BJLQIxnga7RzZkZZmK/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Live"
        ></iframe>
      </div>
    </div>
  );
};

export default ConviteCoprodutorPage;