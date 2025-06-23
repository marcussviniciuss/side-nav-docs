import React from "react";

const WebhooksLogsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">🔗 Webhooks + Logs</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Configure webhooks e monitore logs para integrar e acompanhar eventos na plataforma Área de Membro.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Cadastro de Webhooks</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">🔧 Configuração</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>URL do endpoint para receber eventos</li>
                <li>Eventos disponíveis para monitoramento</li>
                <li>Chave de segurança para autenticação</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">📡 Eventos Disponíveis</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Novas vendas</li>
                <li>Atualizações de status</li>
                <li>Pagamentos recebidos</li>
                <li>Cancelamentos</li>
                <li>Assinaturas</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Monitoramento de Logs</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">📊 Visualização</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Histórico de eventos enviados</li>
                <li>Status de entrega (sucesso/erro)</li>
                <li>Resposta do servidor</li>
                <li>Data e hora do evento</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">⚠️ Alertas</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Falhas na entrega</li>
                <li>Erros de autenticação</li>
                <li>Timeout nas requisições</li>
                <li>Notificações por email</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas Importantes</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Mantenha a URL do webhook sempre acessível</li>
            <li>Configure retry em caso de falhas</li>
            <li>Monitore regularmente os logs</li>
            <li>Teste o webhook antes de usar em produção</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1ikK5qVG6zO4BhkUc85kvnBvaLXPHSggK/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Webhooks e Logs"
        ></iframe>
      </div>
    </div>
  );
};

export default WebhooksLogsPage;