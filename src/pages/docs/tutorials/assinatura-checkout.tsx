import React from "react";

const AssinaturaCheckoutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">✅ Cursos - Aprovar Comentários</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Moderação de Conteúdo</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda como moderar, aprovar e gerenciar comentários dos alunos em seus cursos.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Sistema de Moderação</h2>
          <p className="mb-4">
            O sistema de comentários permite:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Moderação prévia</strong> - Comentários aguardam aprovação</li>
            <li><strong>Filtros automáticos</strong> - Detecção de spam e conteúdo inadequado</li>
            <li><strong>Notificações</strong> - Alertas quando há novos comentários</li>
            <li><strong>Histórico completo</strong> - Registro de todas as ações</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Aprovando Comentários</h2>
          <p className="mb-4">
            Para aprovar comentários:
          </p>
          <ol className="list-decimal list-inside mb-4 text-gray-800">
            <li>Acesse a seção "Comentários Pendentes"</li>
            <li>Leia o comentário completo</li>
            <li>Verifique se está relacionado ao conteúdo</li>
            <li>Clique em "Aprovar" ou "Rejeitar"</li>
            <li>Adicione uma nota interna se necessário</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Critérios de Aprovação</h2>
          <p className="mb-4">
            Aprove comentários que:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>São relevantes</strong> - Relacionados ao conteúdo da aula</li>
            <li><strong>Agregam valor</strong> - Dúvidas, insights ou experiências</li>
            <li><strong>São respeitosos</strong> - Linguagem adequada e cordial</li>
            <li><strong>Seguem as regras</strong> - Não violam termos de uso</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Rejeitando Comentários</h2>
          <p className="mb-4">
            Rejeite comentários que contêm:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Spam</strong> - Links não relacionados ou propaganda</li>
            <li><strong>Linguagem inadequada</strong> - Ofensas ou palavrões</li>
            <li><strong>Conteúdo irrelevante</strong> - Não relacionado ao curso</li>
            <li><strong>Informações falsas</strong> - Dados incorretos ou enganosos</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Respondendo Comentários</h2>
          <p className="mb-4">
            Ao aprovar, você pode:
          </p>
          <ol className="list-decimal list-inside mb-4 text-gray-800">
            <li>Responder diretamente ao aluno</li>
            <li>Esclarecer dúvidas apresentadas</li>
            <li>Agradecer pelo feedback positivo</li>
            <li>Direcionar para recursos adicionais</li>
            <li>Fixar comentários importantes</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Configurações de Moderação</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Defina palavras-chave para filtro automático</li>
            <li>Configure notificações por email</li>
            <li>Estabeleça regras de participação</li>
            <li>Crie respostas padrão para situações comuns</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1gnZeXpQrOnt2F0CDSdTxjO9IAYtTx3kz/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Aprovar Comentários"
        ></iframe>
      </div>
    </div>
  );
};

export default AssinaturaCheckoutPage;