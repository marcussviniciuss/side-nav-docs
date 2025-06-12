import React from "react";

const IndiqueGanheSaquePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">💰 Indique e Ganhe (Saque)</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Saque suas comissões do programa Indique e Ganhe na plataforma Carrinho Digital.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Solicitar Saque</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">💵 Requisitos</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Valor mínimo de R$ 50,00</li>
                <li>Saldo disponível suficiente</li>
                <li>Dados bancários atualizados</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">📊 Comissões</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Visualize comissões disponíveis</li>
                <li>Histórico de comissões geradas</li>
                <li>Status dos pagamentos</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Processo de Saque</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">📱 Passo a Passo</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Verifique saldo disponível</li>
                <li>Confirme valor mínimo (R$ 50,00)</li>
                <li>Selecione valor do saque</li>
                <li>Confirme dados bancários</li>
                <li>Solicite o saque</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">⏱️ Prazos</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Processamento do saque</li>
                <li>Prazo de recebimento</li>
                <li>Confirmação de pagamento</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas Importantes</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Aguarde acumular o valor mínimo</li>
            <li>Mantenha dados bancários atualizados</li>
            <li>Acompanhe o status do saque</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1lHqgEyg8zwAhyEoospr62xWMryp4lLr_/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Indique e Ganhe (Saque)"
        ></iframe>
      </div>
    </div>
  );
};

export default IndiqueGanheSaquePage;