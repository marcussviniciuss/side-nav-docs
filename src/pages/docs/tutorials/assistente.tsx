import React from "react";

const AssistentePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">🧑‍💻 Assistente</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Crie produtos, planos e ofertas em menos de 2 minutos com o assistente da plataforma Área de Membro.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Criação Rápida</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">⚡ Velocidade</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Criação em menos de 2 minutos</li>
                <li>Link de venda gerado automaticamente</li>
                <li>Configuração simplificada</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">🎯 O que você pode criar</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Produtos únicos</li>
                <li>Planos de assinatura</li>
                <li>Ofertas especiais</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Como Funciona</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">📝 Passo a Passo</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Escolha o tipo (assinatura/oferta)</li>
                <li>Preencha informações básicas</li>
                <li>Receba o link de venda</li>
                <li>Comece a vender imediatamente</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">✨ Benefícios</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Processo simplificado</li>
                <li>Sem complicações</li>
                <li>Pronto para vender</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas Importantes</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Tenha as informações básicas prontas</li>
            <li>Verifique o link gerado</li>
            <li>Teste a página de venda</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1gfFdaA7DTT367Sqo15mriGgdru6k5v04/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Assistente"
        ></iframe>
      </div>
    </div>
  );
};

export default AssistentePage;