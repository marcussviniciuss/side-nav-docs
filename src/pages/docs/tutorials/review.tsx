import React from "react";

const ReviewPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">📈 Relatórios</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Analytics</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda como visualizar, interpretar e utilizar relatórios de desempenho para otimizar seus cursos e vendas.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tipos de Relatórios</h2>
          <p className="mb-4">
            A plataforma oferece diversos relatórios:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Relatório de Vendas</strong> - Faturamento e transações</li>
            <li><strong>Relatório de Alunos</strong> - Matrículas e engajamento</li>
            <li><strong>Relatório de Cursos</strong> - Performance por conteúdo</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Relatório de Vendas</h2>
          <p className="mb-4">
            Acompanhe suas vendas através de:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Vendas por período</strong> - Diário, semanal, mensal</li>
            <li><strong>Produtos mais vendidos</strong> - Ranking de performance</li>
            <li><strong>Métodos de pagamento</strong> - PIX, cartão, boleto</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Relatório de Alunos</h2>
          <p className="mb-4">
            Monitore o comportamento dos estudantes:
          </p>
          <ol className="list-decimal list-inside mb-4 text-gray-800">
            <li>Novas matrículas por período</li>
            <li>Taxa de conclusão dos cursos</li>
            <li>Progresso por módulo/aula</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Exportação e Compartilhamento</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Exporte relatórios em Excel</li>
            <li>Compartilhe dashboards com sua equipe</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1M80cmpNH4zqWqffkZIsZylyKf_CUKVn1/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Relatórios"
        ></iframe>
      </div>
    </div>
  );
};

export default ReviewPage;