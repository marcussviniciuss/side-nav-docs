import React from "react";

const LojasPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">🏬 Lojas</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Crie e gerencie múltiplas lojas na plataforma Área de Membro, cada uma com suas próprias configurações e produtos.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Criação de Lojas</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">🔧 Configuração Básica</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Nome da loja</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">🎯 Estratégia</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Loja para produtos físicos</li>
                <li>Loja para planos e assinaturas</li>
                <li>Loja para produtos digitais</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Configurações Independentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">📦 Produtos</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Catálogo específico por loja</li>
                <li>Planos e assinaturas próprios</li>
                <li>Ofertas exclusivas</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">🎟️ Promoções</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Cupons específicos por loja</li>
                <li>Campanhas personalizadas</li>
                <li>Descontos exclusivos</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Gerenciamento</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">👥 Clientes</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Base de clientes por loja</li>
                <li>Histórico de compras</li>
                <li>Preferências específicas</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas Importantes</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Organize as lojas por segmento ou público</li>
            <li>Mantenha configurações consistentes</li>
            <li>Monitore o desempenho individual</li>
            <li>Personalize a experiência por loja</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1oI5YdAa5_Q5VOW5s0n2qlt2InTjikxSU/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Lojas"
        ></iframe>
      </div>
    </div>
  );
};

export default LojasPage;