import React from "react";

const OrderbumpPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">🎓 Certificados</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Certificação</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda como configurar, personalizar e gerenciar certificados de conclusão para seus cursos.
      </p>

      <div className="space-y-8">

        <section>
          <h2 className="text-2xl font-semibold mb-4">Personalização do Design</h2>
          <p className="mb-4">
            Customize a aparência dos certificados:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Logo da empresa</strong> - Adicione sua marca</li>
            <li><strong>Cores</strong> - Paleta de cores personalizada</li>
            <li><strong>Fonte</strong> - Tipografia elegante</li>
            <li><strong>Layout</strong> - Disposição dos elementos</li>
            <li><strong>Imagem de fundo</strong> - Padrões ou texturas</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Informações do Certificado</h2>
          <p className="mb-4">
            Dados que aparecem no certificado:
          </p>
          <ol className="list-decimal list-inside mb-4 text-gray-800">
            <li>Nome completo do aluno</li>
            <li>Título do curso concluído</li>
            <li>Data de conclusão</li>
            <li>Carga horária total</li>
            <li>Nome do instrutor/instituição</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Critérios de Emissão</h2>
          <p className="mb-4">
            Configure quando o certificado é liberado:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Conclusão de todas as aulas</strong> - 100% do conteúdo</li>
            <li><strong>Aprovação em avaliações</strong> - Nota mínima exigida</li>
            <li><strong>Tempo mínimo de estudo</strong> - Horas dedicadas</li>
            <li><strong>Participação em fóruns</strong> - Engajamento mínimo</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1Cha4HNFapAtOmZQMGpRXhirsESIGLCUM/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Certificados"
        ></iframe>
      </div>
    </div>
  );
};

export default OrderbumpPage;