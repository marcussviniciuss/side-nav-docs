import React from "react";

const VendasPt4Page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">💰 Vendas - parte 4</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Continue aprendendo</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Visualize os detalhes financeiros da venda através da aba de valores no modal.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Valores da Venda</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">💵 Valores Principais</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Valor total da venda</li>
                <li>Taxa da plataforma</li>
                <li>Valor líquido a receber</li>
                <li>Data estimada do depósito</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">👥 Distribuição</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Divisão entre usuários</li>
                <li>Valor para cada participante</li>
                <li>Percentual de distribuição</li>
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
                <li>Selecione a aba de valores</li>
                <li>Visualize todos os detalhes financeiros</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas Importantes</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Confirme o valor total recebido</li>
            <li>Verifique a data do depósito</li>
            <li>Acompanhe a distribuição de valores</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
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