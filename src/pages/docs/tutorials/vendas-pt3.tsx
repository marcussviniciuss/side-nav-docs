import React from "react";

const VendasPt3Page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">💰 Vendas - parte 3</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Continue aprendendo</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Visualize os detalhes do produto vendido através da aba de produto no modal.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Detalhes do Produto</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">🖼️ Visualização</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Foto do produto</li>
                <li>Nome do produto</li>
                <li>Descrição completa</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">📋 Informações</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Produto vendido</li>
                <li>Detalhes da oferta</li>
                <li>Valor da venda</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Como Acessar</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">🔍 Visualização</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Abra o modal da venda</li>
                <li>Selecione a aba de produto</li>
                <li>Visualize todos os detalhes</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas Importantes</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Verifique se o produto está correto</li>
            <li>Confirme os detalhes da oferta</li>
            <li>Mantenha as informações atualizadas</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1lCAjKshIY9bqWrYiR0EdLlgVVjgYa_Qk/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Vendas - parte 3"
        ></iframe>
      </div>
    </div>
  );
};

export default VendasPt3Page;