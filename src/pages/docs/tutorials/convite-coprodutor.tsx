import React from "react";

const ConviteCoprodutorPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">🤝 Convite co-produtor</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda a enviar e gerenciar convites para co-produtores na plataforma Carrinho Digital.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Enviando Convite</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">📧 Processo de Convite</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Envie convite via email</li>
                <li>Co-produtor deve estar cadastrado na plataforma</li>
                <li>Convite só é válido para usuários registrados</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">⚠️ Importante</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Verifique se o email está correto</li>
                <li>Confirme se o usuário já está cadastrado</li>
                <li>Aguarde a confirmação do convite</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Gerenciamento</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">🔄 Cancelamento</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Você pode cancelar o convite antes da aceitação</li>
                <li>Após aceito, apenas o co-produtor pode cancelar</li>
                <li>Cancelamento é definitivo</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas Importantes</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Verifique o cadastro antes de enviar</li>
            <li>Mantenha comunicação clara</li>
            <li>Defina responsabilidades antes do convite</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1K1aACdlw0meFowTL9OP0wUeoJSXuuZu6/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Convite co-produtor"
        ></iframe>
      </div>
    </div>
  );
};

export default ConviteCoprodutorPage;