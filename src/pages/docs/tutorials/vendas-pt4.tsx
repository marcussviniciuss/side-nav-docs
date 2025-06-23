import React from "react";

const VendasPt4Page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">🌐 Configurações Domínios</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Domínios Personalizados</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda como configurar domínios personalizados para suas páginas de vendas e área de membros.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Configuração de Domínio</h2>
          <p className="mb-4">
            Configure seu domínio personalizado:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Registro do domínio</strong> - Adquira seu domínio</li>
            <li><strong>Configuração DNS</strong> - Aponte para nossos servidores</li>
            <li><strong>Certificado SSL</strong> - Ativação automática</li>
            <li><strong>Verificação</strong> - Confirme a configuração</li>
            <li><strong>Ativação</strong> - Domínio pronto para uso</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Tipos de Domínio</h2>
          <p className="mb-4">
            Opções disponíveis:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Domínio principal</strong> - Para área de membros</li>
            <li><strong>Subdomínio</strong> - Para diferentes produtos</li>
            <li><strong>Domínio de vendas</strong> - Para páginas de checkout</li>
            <li><strong>Domínio de blog</strong> - Para conteúdo educativo</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Configuração DNS</h2>
          <p className="mb-4">
            Registros necessários:
          </p>
          <ol className="list-decimal list-inside mb-4 text-gray-800">
            <li>Registro A - Apontar para IP do servidor</li>
            <li>Registro CNAME - Para subdomínios</li>
            <li>Registro MX - Para emails personalizados</li>
            <li>Registro TXT - Para verificação</li>
            <li>Propagação DNS - Aguardar até 48h</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Benefícios</h2>
          <p className="mb-4">
            Vantagens do domínio personalizado:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Profissionalismo</strong> - Marca própria</li>
            <li><strong>Confiabilidade</strong> - Maior credibilidade</li>
            <li><strong>SEO</strong> - Melhor posicionamento</li>
            <li><strong>Branding</strong> - Fortalecimento da marca</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Verifique configurações DNS</li>
            <li>Aguarde propagação completa</li>
            <li>Teste em diferentes navegadores</li>
            <li>Limpe cache do navegador</li>
            <li>Entre em contato com suporte se necessário</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1so9xu27ZpcE20xqqSN295WDKI_bGMZ1u/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Configurações Domínios"
        ></iframe>
      </div>
    </div>
  );
};

export default VendasPt4Page;