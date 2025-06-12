import React from "react";

const CriandoProdutoPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">📦 Criando um Produto</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda a criar e gerenciar diferentes tipos de produtos na plataforma Carrinho Digital.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tipos de Produtos</h2>
          <p className="mb-4">
            A plataforma oferece três tipos de produtos que você pode vender:
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">👥 Área de Membro</h3>
              <p className="mb-2">Crie uma área exclusiva para seus membros com conteúdo protegido.</p>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Conteúdo exclusivo para assinantes</li>
                <li>Pode ser vendido como assinatura mensal ou anual</li>
                <li>Ideal para cursos, comunidades e conteúdo premium</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">🔗 Serviço (Link de Pagamento)</h3>
              <p className="mb-2">Crie links de pagamento para seus serviços.</p>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Venda única ou assinatura recorrente</li>
                <li>Ideal para consultorias, mentorias e serviços</li>
                <li>Geração automática de link de pagamento</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">📚 E-book</h3>
              <p className="mb-2">Venda seus e-books e materiais digitais.</p>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Venda única do material digital</li>
                <li>Entrega automática após o pagamento</li>
                <li>Suporte para PDF e outros formatos digitais</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Formas de Venda</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Venda Única</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Cliente paga uma única vez</li>
                <li>Acesso permanente ao conteúdo</li>
                <li>Ideal para e-books e serviços pontuais</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Assinatura</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Pagamento recorrente</li>
                <li>Acesso contínuo ao conteúdo</li>
                <li>Ideal para áreas de membros e serviços contínuos</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas Importantes</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Escolha o tipo de produto adequado ao seu negócio</li>
            <li>Forneça descrições claras e detalhadas</li>
            <li>Use imagens de qualidade para seus produtos</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1E14YtIfB-bKD4e66naUdCdGzP4oUQoUJ/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Criando um Produto"
        ></iframe>
      </div>
    </div>
  );
};

export default CriandoProdutoPage;