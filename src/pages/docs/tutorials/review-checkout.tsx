import React from "react";

const ReviewCheckoutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">👥 Alunos</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Gestão de Estudantes</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda como gerenciar, acompanhar e dar suporte aos alunos matriculados em seus cursos.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Lista de Alunos</h2>
          <p className="mb-4">
            Visualize todos os seus alunos e suas informações:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Dados pessoais</strong> - Nome, email, telefone</li>
            <li><strong>Cursos matriculados</strong> - Quais cursos o aluno possui</li>
            <li><strong>Progresso</strong> - Percentual de conclusão</li>
            <li><strong>Data de matrícula</strong> - Quando se inscreveu</li>
            <li><strong>Último acesso</strong> - Atividade recente</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Acompanhamento de Progresso</h2>
          <p className="mb-4">
            Monitore o desenvolvimento dos estudantes:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Aulas assistidas</strong> - Conteúdo já consumido</li>
            <li><strong>Tempo de estudo</strong> - Horas dedicadas ao curso</li>
            <li><strong>Exercícios realizados</strong> - Atividades completadas</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Filtros e Busca</h2>
          <p className="mb-4">
            Organize sua base de alunos:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Filtro por curso</strong> - Alunos de cursos específicos</li>
            <li><strong>Data de matrícula</strong> - Períodos específicos</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Relatórios de Alunos</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Exporte listas de alunos</li>
            <li>Análise de engajamento</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1megDoYiwRwnWwWclO4ipxgICIijK2Bp7/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Gestão de Alunos"
        ></iframe>
      </div>
    </div>
  );
};

export default ReviewCheckoutPage;