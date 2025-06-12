import React from "react";

const FinancasSaquePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">💵 Finanças (Saque)</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Gerencie suas solicitações de saque e acompanhe suas finanças na plataforma Carrinho Digital.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Solicitações de Saque</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">📊 Status dos Saques</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Solicitações pendentes</li>
                <li>Saques concluídos</li>
                <li>Saques cancelados</li>
                <li>Histórico completo</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">🔄 Gerenciamento</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Cancelar saques não efetivados</li>
                <li>Solicitar novo saque</li>
                <li>Acompanhar status</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Novo Saque</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">💳 Processo</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Verificar saldo disponível</li>
                <li>Definir valor do saque</li>
                <li>Solicitar saque</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">📋 Requisitos</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Saldo mínimo disponível</li>
                <li>Dados bancários atualizados</li>
                <li>Prazo de processamento</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas Importantes</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Verifique o status antes de cancelar</li>
            <li>Mantenha dados bancários atualizados</li>
            <li>Acompanhe o processamento</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1z2AihraYrhP1Psd3wB2bHoO0W9Ni1HYC/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Finanças (Saque)"
        ></iframe>
      </div>
    </div>
  );
};

export default FinancasSaquePage;