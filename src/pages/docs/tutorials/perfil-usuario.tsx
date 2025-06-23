import React from "react";

const PerfilUsuarioPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">📊 Dashboard</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Visão Geral</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda como navegar e utilizar o painel principal da plataforma educacional.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Visão Geral do Dashboard</h2>
          <p className="mb-4">
            O Dashboard é sua central de controle, onde você pode:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Visualizar estatísticas</strong> - Vendas, alunos, receitas</li>
            <li><strong>Monitorar progresso</strong> - Acompanhar desempenho dos alunos</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Métricas Principais</h2>
          <p className="mb-4">
            No topo do dashboard você encontra:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Total de Alunos</strong> - Receita total do período</li>
            <li><strong>Alunos Ativos</strong> - Número de estudantes engajados</li>
            <li><strong>Cursos Publicados</strong> - Quantidade de cursos disponíveis</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Gráficos e Relatórios</h2>
          <p className="mb-4">
            Analise seu desempenho através de:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Gráfico de Matrículas</strong> - Novos alunos por período</li>
          </ul>
        </section>
        
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/17E9lG2kA7DdcujrF3wPAOVM1qfRdt-Gb/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo do Dashboard"
        ></iframe>
      </div>
    </div>
  );
};

export default PerfilUsuarioPage;