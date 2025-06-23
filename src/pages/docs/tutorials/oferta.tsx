import React from "react";

const OfertaPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">✏️ Cursos - Editar Curso</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Edição de Conteúdo</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda como editar e atualizar seus cursos existentes, modificando conteúdo, estrutura e configurações.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Informações Básicas</h2>
          <p className="mb-4">
            Edite as informações principais do seu curso:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Título do curso</strong> - Nome que aparece para os alunos</li>
            <li><strong>Descrição</strong> - Resumo do que o curso oferece</li>
            <li><strong>Categoria</strong> - Área de conhecimento do curso</li>
            <li><strong>Nível</strong> - Iniciante, intermediário ou avançado</li>
            <li><strong>Imagem de capa</strong> - Visual principal do curso</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Estrutura do Curso</h2>
          <p className="mb-4">
            Organize o conteúdo do seu curso:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Módulos</strong> - Divida o conteúdo em seções lógicas</li>
            <li><strong>Aulas</strong> - Adicione, remova ou reordene aulas</li>
            <li><strong>Materiais extras</strong> - PDFs, exercícios, recursos</li>
            <li><strong>Duração estimada</strong> - Tempo necessário para cada seção</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Edição de Aulas</h2>
          <p className="mb-4">
            Para cada aula você pode modificar:
          </p>
          <ol className="list-decimal list-inside mb-4 text-gray-800">
            <li>Título e descrição da aula</li>
            <li>Vídeo principal (upload ou link)</li>
            <li>Materiais complementares</li>
            <li>Exercícios e questionários</li>
            <li>Ordem de apresentação</li>
            <li>Configurações de acesso</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Configurações Avançadas</h2>
          <p className="mb-4">
            Ajuste configurações específicas:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Preço</strong> - Valor único ou assinatura</li>
            <li><strong>Acesso</strong> - Liberação progressiva ou total</li>
            <li><strong>Certificado</strong> - Configurar emissão automática</li>
            <li><strong>Fórum</strong> - Habilitar discussões entre alunos</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Publicação e Versioning</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Salve como rascunho para edições futuras</li>
            <li>Publique alterações quando estiver pronto</li>
            <li>Notifique alunos sobre atualizações importantes</li>
            <li>Mantenha backup de versões anteriores</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/15nOheGjwczvLfy9LT_cY2Fc8VF7pcUPj/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Editar Curso"
        ></iframe>
      </div>
    </div>
  );
};

export default OfertaPage;