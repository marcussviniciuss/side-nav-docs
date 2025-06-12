import React from "react";

const RecuperacaoAssinaturasPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">🔄 Recuperação e Assinaturas</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Gerencie suas assinaturas e acompanhe a recuperação de pagamentos na plataforma Carrinho Digital.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Visualização de Assinaturas</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">📊 Tabela de Assinaturas</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Lista de todas as assinaturas</li>
                <li>Status de pagamento</li>
                <li>Próxima cobrança</li>
                <li>Histórico de pagamentos</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">💬 Contato Rápido</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Ícone do WhatsApp em cada assinatura</li>
                <li>Clique para contato direto</li>
                <li>Recuperação de pagamentos</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Detalhes da Assinatura</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">👤 Informações do Cliente</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Dados do assinante</li>
                <li>Plano contratado</li>
                <li>Valor da assinatura</li>
                <li>Status atual</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">💳 Pagamentos</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Histórico de cobranças</li>
                <li>Tentativas de recuperação</li>
                <li>Próxima data de cobrança</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas Importantes</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Monitore pagamentos em atraso</li>
            <li>Entre em contato antes do vencimento</li>
            <li>Mantenha histórico de recuperação</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1nJcmTH6nFOUkJ6ePfsxu186VeJ3TiOlg/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Recuperação e Assinaturas"
        ></iframe>
      </div>
    </div>
  );
};

export default RecuperacaoAssinaturasPage;