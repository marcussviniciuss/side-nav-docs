import React from "react";

const DashboardPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">📊 Dashboard</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Visualize métricas importantes e acompanhe o desempenho do seu negócio na plataforma Carrinho Digital.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Métricas Principais</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">📈 Informações Básicas</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Total de vendas</li>
                <li>Valor total faturado</li>
                <li>Número de clientes</li>
                <li>Taxa de conversão</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">🏆 Produtos em Destaque</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Produto mais vendido</li>
                <li>Valor total por produto</li>
                <li>Quantidade de vendas</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Análise de Desempenho</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">🎟️ Cupons</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Cupons mais utilizados</li>
                <li>Valor total de descontos</li>
                <li>Taxa de uso por cupom</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">💳 Pagamentos</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Métodos mais utilizados</li>
                <li>Distribuição por forma de pagamento</li>
                <li>Taxa de aprovação</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Filtros de Data</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">📅 Períodos</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Vendas do dia</li>
                <li>Últimos 30 dias</li>
                <li>Período personalizado</li>
                <li>Comparativo entre períodos</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">📊 Relatórios</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Exportação de dados</li>
                <li>Gráficos comparativos</li>
                <li>Tendências de vendas</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas Importantes</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Monitore os cupons mais efetivos</li>
            <li>Acompanhe os métodos de pagamento preferidos</li>
            <li>Analise o desempenho por período</li>
            <li>Compare resultados entre diferentes datas</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1oS3JLvXvmDOX2Ibwqw_u_5OZmw6dsLdh/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Dashboard"
        ></iframe>
      </div>
    </div>
  );
};

export default DashboardPage;