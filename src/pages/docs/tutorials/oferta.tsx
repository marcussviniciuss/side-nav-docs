import React from "react";

const OfertaPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">🎁 Oferta</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda a criar ofertas especiais e gerar links de checkout para seus produtos.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Criando uma Oferta</h2>
          <p className="mb-4">
            Crie ofertas especiais para seus produtos de pagamento único:
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">📊 Configuração de Preços</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Defina o preço de custo do produto</li>
                <li>Estabeleça o valor de venda da oferta</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">🔗 Link de Checkout</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Geração automática do link de pagamento</li>
                <li>Link único para cada oferta</li>
                <li>Fácil de copiar e compartilhar</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">📋 Tabela de Ofertas</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Visualize todas as suas ofertas ativas</li>
                <li>Copie os links diretamente da tabela</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Como Usar</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Compartilhamento</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Copie o link de checkout da tabela</li>
                <li>Compartilhe em qualquer canal de comunicação</li>
                <li>Cliente acessa diretamente a página de pagamento</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas Importantes</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Mantenha um registro dos preços de custo atualizados</li>
            <li>Teste diferentes valores de oferta para encontrar o melhor resultado</li>
            <li>Organize suas ofertas com nomes claros e descritivos</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1SstSr66TcczR66ar1f8SYjdztSDaahTq/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Oferta"
        ></iframe>
      </div>
    </div>
  );
};

export default OfertaPage;