import React from "react";

const OrderBumpPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">🎯 OrderBump</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda a configurar OrderBump para suas ofertas e planos na plataforma Carrinho Digital.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Configurando OrderBump</h2>
          <p className="mb-4">
            Configure OrderBump para seus produtos:
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">📦 Seleção de Produtos</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Escolha as ofertas que terão OrderBump</li>
                <li>Selecione os planos de assinatura</li>
                <li>Ative ou desative para cada produto</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">⚙️ Configuração</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Defina o produto do OrderBump</li>
                <li>Estabeleça o preço especial</li>
                <li>Configure a mensagem de oferta</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Como Funciona</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Processo de Venda</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Cliente seleciona o produto principal</li>
                <li>OrderBump aparece durante o checkout</li>
                <li>Cliente pode adicionar o produto extra</li>
                <li>Valor é somado ao pedido principal</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas Importantes</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Escolha produtos complementares para OrderBump</li>
            <li>Ofereça preços atrativos</li>
            <li>Teste diferentes combinações de produtos</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1S63DBdkroCMKQun3XKYycQww5Ly7BYt2/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de OrderBump"
        ></iframe>
      </div>
    </div>
  );
};

export default OrderBumpPage;