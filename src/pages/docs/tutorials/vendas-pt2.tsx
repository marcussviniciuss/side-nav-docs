import React from "react";

const VendasPt2Page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">💰 Vendas - parte 2</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Continue aprendendo</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Visualize informações detalhadas de cada venda através do modal de detalhes.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Detalhes da Venda</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">💳 Informações de Pagamento</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Método de pagamento utilizado</li>
                <li>ID da transação</li>
                <li>Status do pagamento</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">👤 Dados do Cliente</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>CPF/CNPJ</li>
                <li>Nome completo</li>
                <li>Email</li>
                <li>Telefone com ícone do WhatsApp</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Como Acessar</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">🔍 Visualização</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Clique na venda desejada</li>
                <li>Modal abre com todas as informações</li>
                <li>Dados organizados por seções</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas Importantes</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Verifique todos os dados do cliente</li>
            <li>Confirme o método de pagamento</li>
            <li>Use o WhatsApp para contato rápido</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/14F4dqR1r_g1YcJRs019P0QGs6d_8iCfa/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Vendas - parte 2"
        ></iframe>
      </div>
    </div>
  );
};

export default VendasPt2Page;