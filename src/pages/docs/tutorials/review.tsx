import React from "react";

const ReviewPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">⭐ Review</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda a criar e gerenciar avaliações para suas ofertas e assinaturas na plataforma Carrinho Digital.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Criando uma Avaliação</h2>
          <p className="mb-4">
            Configure avaliações para seus produtos:
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">👤 Informações do Usuário</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Adicione o nome do usuário</li>
                <li>Faça upload da foto do perfil</li>
                <li>Escolha o produto avaliado</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">⭐ Avaliação</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Selecione de 1 a 5 estrelas</li>
                <li>Escreva o comentário da avaliação</li>
                <li>Escolha entre oferta ou assinatura</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Como Usar</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Processo de Criação</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Selecione o produto para avaliação</li>
                <li>Preencha os dados do usuário</li>
                <li>Defina a nota em estrelas</li>
                <li>Adicione o comentário</li>
                <li>Salve a avaliação</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas Importantes</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Use fotos de perfil de qualidade</li>
            <li>Escreva comentários detalhados e sinceros</li>
            <li>Distribua as avaliações entre diferentes produtos</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1lt5AbCCbOQ79394TEDgBN_wQnmeaH71m/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Review"
        ></iframe>
      </div>
    </div>
  );
};

export default ReviewPage;