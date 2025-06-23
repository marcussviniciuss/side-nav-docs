import React from "react";

const CriandoProdutoPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">📚 Cursos - Meus Cursos</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Gestão de Cursos</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda como visualizar, organizar e gerenciar todos os seus cursos criados na plataforma.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Visualizando Seus Cursos</h2>
          <p className="mb-4">
            Na seção "Meus Cursos" você pode:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Ver todos os cursos</strong> - Lista completa dos seus cursos</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Filtros e Organização</h2>
          <p className="mb-4">
            Organize seus cursos usando:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Busca por nome</strong> - Encontre cursos específicos rapidamente</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Ações Disponíveis</h2>
          <p className="mb-4">
            Para cada curso você pode:
          </p>
          <ol className="list-decimal list-inside mb-4 text-gray-800">
            <li>Editar informações básicas</li>
            <li>Adicionar ou remover aulas</li>
            <li>Gerenciar alunos matriculados</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Métricas por Curso</h2>
          <p className="mb-4">
            Acompanhe o desempenho através de:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Total de matrículas</strong> - Quantos alunos se inscreveram</li>
            <li><strong>Taxa de conclusão</strong> - Percentual de alunos que terminaram</li>
            <li><strong>Avaliação média</strong> - Nota dada pelos estudantes</li>
            <li><strong>Receita gerada</strong> - Faturamento total do curso</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas de Gestão</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Mantenha cursos atualizados regularmente</li>
            <li>Monitore feedback dos alunos</li>
            <li>Use métricas para melhorar conteúdo</li>
            <li>Archive cursos desatualizados</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1BX8tJGzzq6V3q9HzY6j0QmHH6W4C0C6k/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Meus Cursos"
        ></iframe>
      </div>
    </div>
  );
};

export default CriandoProdutoPage;