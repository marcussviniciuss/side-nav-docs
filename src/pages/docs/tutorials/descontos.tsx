import React from "react";

const DescontosPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">💸 Descontos</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda a criar e gerenciar cupons de desconto para suas ofertas e planos na plataforma Carrinho Digital.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Criando um Cupom</h2>
          <p className="mb-4">
            Configure cupons de desconto para seus produtos:
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">🎯 Produtos</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Selecione a oferta ou plano específico</li>
                <li>Defina o percentual ou valor do desconto</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">📅 Validade</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Data de início do desconto</li>
                <li>Data de término do desconto</li>
                <li>Ou marque como indeterminado</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">👥 Limites de Uso</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Uso único por cliente</li>
                <li>Uso ilimitado</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Como Usar</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Aplicação do Desconto</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Cliente insere o código do cupom</li>
                <li>Sistema verifica a validade</li>
                <li>Desconto é aplicado automaticamente</li>
                <li>Confirmação do valor final</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas Importantes</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Crie códigos de cupom fáceis de lembrar</li>
            <li>Defina períodos de validade estratégicos</li>
            <li>Monitore o desempenho dos descontos</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1SykNO50Efrq2w8AtuPMW88jGXKPa45P6/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Descontos"
        ></iframe>
      </div>
    </div>
  );
};

export default DescontosPage;