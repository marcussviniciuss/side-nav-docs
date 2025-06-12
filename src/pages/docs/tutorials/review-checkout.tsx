import React from "react";

const ReviewCheckoutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">🛒 Review no checkout</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Veja como as avaliações aparecem durante o processo de checkout na plataforma Carrinho Digital.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Como Aparece</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">📱 Visualização</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Foto do usuário</li>
                <li>Nome do avaliador</li>
                <li>Nota em estrelas</li>
                <li>Comentário da avaliação</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">📍 Localização</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Aparece próximo ao produto</li>
                <li>Visível durante todo o checkout</li>
                <li>Fácil visualização para o cliente</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas Importantes</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Mantenha as avaliações atualizadas</li>
            <li>Priorize avaliações positivas</li>
            <li>Exiba comentários relevantes</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1OZ2hxMjh9NA6WAetizbv_FoSVZSSS21Y/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Review no checkout"
        ></iframe>
      </div>
    </div>
  );
};

export default ReviewCheckoutPage;