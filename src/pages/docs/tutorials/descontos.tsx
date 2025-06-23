import React from "react";

const DescontosPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">🏪 Lojas - Criar Loja</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">E-commerce</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda como criar e configurar sua loja online para vender cursos e produtos digitais.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Configuração Inicial</h2>
          <p className="mb-4">
            Para criar sua loja, você precisa configurar:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Nome da loja</strong> - Identidade do seu negócio</li>
            <li><strong>Descrição</strong> - O que sua loja oferece</li>
            <li><strong>Logo</strong> - Imagem representativa da marca</li>
            <li><strong>Cores e tema</strong> - Visual personalizado</li>
            <li><strong>Domínio</strong> - URL personalizada (opcional)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Design da Loja</h2>
          <p className="mb-4">
            Personalize a aparência:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Template</strong> - Escolha um modelo base</li>
            <li><strong>Cores</strong> - Paleta de cores da marca</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Adicionando Produtos</h2>
          <p className="mb-4">
            Após criar a loja, adicione seus produtos:
          </p>
          <ol className="list-decimal list-inside mb-4 text-gray-800">
            <li>Importe cursos existentes</li>
            <li>Configure preços e promoções</li>
            <li>Defina categorias</li>
            <li>Adicione descrições detalhadas</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Publicação da Loja</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Revise todas as configurações</li>
            <li>Teste o processo de compra</li>
            <li>Publique a loja</li>
            <li>Compartilhe o link com clientes</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1E4I99SpSYOK0KMeZoDpnYiS2jd_fBGe2/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Criar Loja"
        ></iframe>
      </div>
    </div>
  );
};

export default DescontosPage;