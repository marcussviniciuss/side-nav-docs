import React from "react";

const VendasPt1Page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">💰 Vendas - parte 1</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Acompanhe suas vendas e entre em contato com os clientes diretamente pelo WhatsApp.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Visualização de Vendas</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">📊 Tabela de Vendas</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Lista de todas as vendas realizadas</li>
                <li>Dados do cliente</li>
                <li>Valor da venda</li>
                <li>Status do pedido</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">💬 Contato Rápido</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Ícone do WhatsApp em cada venda</li>
                <li>Clique para abrir conversa direta</li>
                <li>Contato instantâneo com o cliente</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas Importantes</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Mantenha o WhatsApp atualizado</li>
            <li>Responda os clientes rapidamente</li>
            <li>Acompanhe o status das vendas</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/100A7g6u9Di2qZMFBN_2_hF63qBjIYzP1/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Vendas - parte 1"
        ></iframe>
      </div>
    </div>
  );
};

export default VendasPt1Page;