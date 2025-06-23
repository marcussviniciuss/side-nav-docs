import React from "react";

const VendasPt3Page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">🔗 Webhooks</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Integração Automática</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda como configurar webhooks para automatizar processos e integrar com sistemas externos.
      </p>

      <div className="space-y-8">

        <section>
          <h2 className="text-2xl font-semibold mb-4">Configuração de Webhooks</h2>
          <p className="mb-4">
            Como configurar um webhook:
          </p>
          <ol className="list-decimal list-inside mb-4 text-gray-800">
            <li>Defina a URL de destino</li>
            <li>Selecione os eventos de interesse</li>
            <li>Teste a conexão</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Segurança</h2>
          <p className="mb-4">
            Proteja seus webhooks:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Assinatura digital</strong> - Verificar autenticidade</li>
            <li><strong>HTTPS obrigatório</strong> - Conexão criptografada</li>
            <li><strong>Token de autenticação</strong> - Chave secreta</li>
            <li><strong>Validação de origem</strong> - IP whitelist</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Monitoramento</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Log de todas as tentativas de envio</li>
            <li>Status de entrega (sucesso/falha)</li>
            <li>Reenvio automático em caso de falha</li>
            <li>Alertas para webhooks com problemas</li>
            <li>Histórico de eventos processados</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1kN6SHg0ZG4chKQzHxOFkmUGV6yrpbQKi/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Webhooks"
        ></iframe>
      </div>
    </div>
  );
};

export default VendasPt3Page;