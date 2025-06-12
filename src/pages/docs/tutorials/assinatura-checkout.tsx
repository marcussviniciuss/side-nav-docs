import React from "react";

const AssinaturaCheckoutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">🛒 Assinatura + Checkout</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda a configurar assinaturas recorrentes e o processo de checkout na plataforma Carrinho Digital.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Criando uma Assinatura</h2>
          <p className="mb-4">
            Configure assinaturas para seus produtos:
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">📅 Recorrência</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Escolha a periodicidade da cobrança</li>
                <li>Mensal, trimestral ou anual</li>
                <li>Defina a data de vencimento</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">💰 Valores</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Valor da assinatura</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">🔗 Link de Checkout</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Geração automática do link de assinatura</li>
                <li>Link único para cada plano</li>
                <li>Fácil de copiar e compartilhar</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Como Funciona</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Processo de Assinatura</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Cliente acessa o link de assinatura</li>
                <li>Escolhe o plano desejado</li>
                <li>Preenche os dados de pagamento</li>
                <li>Confirma a assinatura</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Cobranças Recorrentes</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Cobrança automática na data definida</li>
                <li>Notificação por e-mail antes da cobrança</li>
                <li>Comprovante enviado após cada pagamento</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas Importantes</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Ofereça diferentes opções de recorrência</li>
            <li>Considere descontos para planos mais longos</li>
            <li>Mantenha os clientes informados sobre as cobranças</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1pKRM24VnCDEGkQxb7R1LO2ptziRQIu7U/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Assinatura + Checkout"
        ></iframe>
      </div>
    </div>
  );
};

export default AssinaturaCheckoutPage;