import React from "react";

const VendasPt1Page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">💳 Gateway</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Gateway de Pagamento</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda como configurar e gerenciar gateways de pagamento para processar transações de forma segura.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Configuração do Gateway</h2>
          <p className="mb-4">
            Configure seu gateway de pagamento:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Dados bancários</strong> - Conta para recebimento</li>
            <li><strong>Chave PIX</strong> - Para pagamentos instantâneos</li>
            <li><strong>Credenciais da operadora</strong> - Tokens de acesso</li>
            <li><strong>Métodos aceitos</strong> - Cartão, PIX, boleto</li>
            <li><strong>Configurações de segurança</strong> - Criptografia e validações</li>
          </ul>
        </section>


        <section>
          <h2 className="text-2xl font-semibold mb-4">Segurança e Compliance</h2>
          <p className="mb-4">
            Recursos de proteção:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Certificado SSL</strong> - Criptografia de dados</li>
            <li><strong>Tokenização</strong> - Proteção de dados do cartão</li>
            <li><strong>3D Secure</strong> - Autenticação adicional</li>
            <li><strong>Antifraude</strong> - Detecção de transações suspeitas</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1Hi3NxR7AH6JtXfbdGgFzQYypaLGHLP9u/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Gateway"
        ></iframe>
      </div>
    </div>
  );
};

export default VendasPt1Page;