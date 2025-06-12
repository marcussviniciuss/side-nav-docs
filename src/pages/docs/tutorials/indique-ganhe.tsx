import React from "react";

const IndiqueGanhePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">🎁 Indique e Ganhe</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Ganhe comissões indicando novos produtores na plataforma Carrinho Digital.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Como Funciona</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">💰 Comissões</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Ganhe de 5% a 20% das vendas</li>
                <li>Comissão sobre vendas dos indicados</li>
                <li>Sem limite de indicações</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">🔗 Link de Indicação</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Link personalizado</li>
                <li>Compartilhe com potenciais produtores</li>
                <li>Acompanhe conversões</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Processo</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">📱 Passo a Passo</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Copie seu link de indicação</li>
                <li>Compartilhe com produtores</li>
                <li>Acompanhe as vendas</li>
                <li>Receba suas comissões</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">📊 Acompanhamento</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Visualize indicações ativas</li>
                <li>Monitore comissões geradas</li>
                <li>Histórico de pagamentos</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas Importantes</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Compartilhe com produtores ativos</li>
            <li>Mantenha contato com seus indicados</li>
            <li>Acompanhe o desempenho das vendas</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1e4Mr6dqc1kXf162RFcZVMPoCOMuT4PDQ/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Indique e Ganhe"
        ></iframe>
      </div>
    </div>
  );
};

export default IndiqueGanhePage;