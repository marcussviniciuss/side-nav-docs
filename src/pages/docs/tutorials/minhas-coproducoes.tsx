import React from "react";

const MinhasCoproducoesPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">💰 Vendas</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Gestão de Vendas</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda como acompanhar, analisar e otimizar suas vendas de cursos e produtos digitais.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Painel de Vendas</h2>
          <p className="mb-4">
            No painel de vendas você pode visualizar:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Vendas recentes</strong> - Últimas transações realizadas</li>
            <li><strong>Faturamento total</strong> - Receita acumulada</li>
            <li><strong>Produtos mais vendidos</strong> - Ranking de performance</li>
            <li><strong>Status dos pagamentos</strong> - Aprovados, pendentes, cancelados</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Análise de Performance</h2>
          <p className="mb-4">
            Acompanhe métricas importantes:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Taxa de conversão</strong> - Visitantes que se tornaram clientes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Detalhes das Transações</h2>
          <p className="mb-4">
            Para cada venda você pode ver:
          </p>
          <ol className="list-decimal list-inside mb-4 text-gray-800">
            <li>Dados do comprador</li>
            <li>Produto adquirido</li>
            <li>Valor pago</li>
            <li>Método de pagamento</li>
            <li>Data e hora da transação</li>
            <li>Status do pagamento</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Filtros e Relatórios</h2>
          <p className="mb-4">
            Organize suas vendas usando:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Período</strong> - Filtrar por datas específicas</li>
            <li><strong>Produto</strong> - Vendas de cursos específicos</li>
            <li><strong>Status</strong> - Aprovadas, pendentes, canceladas</li>
            <li><strong>Método de pagamento</strong> - PIX, cartão, boleto</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1FKC60OyuPLvjkelNhSHTKPp9N2b2mnZV/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Vendas"
        ></iframe>
      </div>
    </div>
  );
};

export default MinhasCoproducoesPage;