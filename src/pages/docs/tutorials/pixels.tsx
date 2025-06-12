import React from "react";

const PixelsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">📡 Pixels</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda a configurar e gerenciar pixels de rastreamento para suas ofertas e planos na plataforma Carrinho Digital.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tipos de Pixels</h2>
          <p className="mb-4">
            Configure diferentes pixels de rastreamento:
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">📱 Facebook Pixel</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Rastreamento de conversões</li>
                <li>Retargeting de clientes</li>
                <li>Otimização de campanhas</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">🔍 Google Ads</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Conversão de campanhas</li>
                <li>Rastreamento de eventos</li>
                <li>Otimização de anúncios</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">📊 Google Analytics</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Análise de comportamento</li>
                <li>Métricas de conversão</li>
                <li>Relatórios detalhados</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Como Configurar</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Configuração Básica</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Adicione o ID do pixel</li>
                <li>Selecione os produtos para rastreamento</li>
                <li>Escolha os eventos a serem monitorados</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas Importantes</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Verifique se os pixels estão funcionando corretamente</li>
            <li>Configure eventos relevantes para seu negócio</li>
            <li>Monitore as conversões regularmente</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1AeWwIIbTIwMRatUgEUGqAt0HilwkuKpK/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Pixels"
        ></iframe>
      </div>
    </div>
  );
};

export default PixelsPage;