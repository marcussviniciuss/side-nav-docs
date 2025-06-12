import React from "react";

const MinhasCoproducoesPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">🤝 Minhas co-produções</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Gerencie suas co-produções na plataforma Carrinho Digital.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Gerenciando Co-produções</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">✅ Aceitação</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Receba convite via email</li>
                <li>Revise os detalhes da co-produção</li>
                <li>Aceite o convite para iniciar</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">🔄 Cancelamento</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Você pode cancelar a qualquer momento</li>
                <li>Cancelamento é definitivo</li>
                <li>Notifique o produtor principal</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Compartilhamento</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">🔗 Link de Venda</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Copie o link quando a co-produção estiver ativa</li>
                <li>Compartilhe com sua audiência</li>
                <li>Monitore as vendas realizadas</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas Importantes</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Mantenha o link atualizado</li>
            <li>Monitore o desempenho das vendas</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1vWzem1NV6F1MOj9t2h7fmgRicFcxr6Kl/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Minhas co-produções"
        ></iframe>
      </div>
    </div>
  );
};

export default MinhasCoproducoesPage;