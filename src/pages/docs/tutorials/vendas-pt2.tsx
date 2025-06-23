import React from "react";

const VendasPt2Page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">📄 Faturas do Produtor</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Gestão de Pagamentos e Planos</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Acompanhe o histórico de pagamentos do seu plano, status das faturas e alterações de preços.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Status do Plano Atual</h2>
          <p className="mb-4">
            Informações sobre sua assinatura:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Plano ativo</strong> - Tipo de plano contratado (Básico, Pro, Premium)</li>
            <li><strong>Status do pagamento</strong> - Em dia, pendente ou vencido</li>
            <li><strong>Data de vencimento</strong> - Próxima cobrança</li>
            <li><strong>Valor atual</strong> - Preço mensal ou anual</li>
            <li><strong>Método de pagamento</strong> - Cartão, boleto ou PIX</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Histórico de Faturas</h2>
          <p className="mb-4">
            Visualize todas as suas faturas:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Faturas pagas</strong> - Comprovantes de pagamentos realizados</li>
            <li><strong>Faturas pendentes</strong> - Valores em aberto</li>
            <li><strong>Faturas vencidas</strong> - Pagamentos em atraso</li>
            <li><strong>Download de comprovantes</strong> - PDF para contabilidade</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Controle de Pagamentos</h2>
          <p className="mb-4">
            Gerencie seus pagamentos:
          </p>
          <ol className="list-decimal list-inside mb-4 text-gray-800">
            <li>Visualize o status de cada fatura (Paga/Pendente/Vencida)</li>
            <li>Receba notificações de vencimento por email</li>
            <li>Quite faturas em atraso diretamente na plataforma</li>
            <li>Configure renovação automática</li>
            <li>Altere a data de vencimento preferida</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Alterações de Preço</h2>
          <p className="mb-4">
            Acompanhe mudanças no valor do plano:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Histórico de preços</strong> - Valores cobrados ao longo do tempo</li>
            <li><strong>Notificação de aumento</strong> - Aviso prévio de 30 dias</li>
            <li><strong>Comparativo de planos</strong> - Benefícios de cada categoria</li>
            <li><strong>Upgrade/Downgrade</strong> - Alteração de plano a qualquer momento</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Relatórios Financeiros</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Relatório anual de gastos com a plataforma</li>
            <li>Extrato detalhado por período</li>
            <li>Comprovantes para declaração de imposto de renda</li>
            <li>Histórico de reembolsos (se aplicável)</li>
            <li>Projeção de custos futuros</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Suporte e Dúvidas</h2>
          <p className="mb-4">
            Em caso de problemas com pagamentos:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Contestação de cobrança</strong> - Questione valores incorretos</li>
            <li><strong>Problemas no cartão</strong> - Atualize dados de pagamento</li>
            <li><strong>Cancelamento</strong> - Processo para encerrar assinatura</li>
            <li><strong>Reativação</strong> - Como voltar após cancelamento</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/18WUymUnaDSulGVQW-ATfe7SxxPkvxbyi/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo sobre Faturas do Produtor"
        ></iframe>
      </div>
    </div>
  );
};

export default VendasPt2Page;