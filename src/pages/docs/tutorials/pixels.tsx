import React from "react";

const PixelsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">🏬 Lojas - Minhas Lojas</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Gestão de Lojas</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda como gerenciar, monitorar e otimizar suas lojas online existentes.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Visão Geral das Lojas</h2>
          <p className="mb-4">
            Na seção "Minhas Lojas" você pode visualizar:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Lista de lojas</strong> - Todas as suas lojas criadas</li>
            <li><strong>Produtos</strong> - Quantidade de itens em cada loja</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Gerenciamento de Lojas</h2>
          <p className="mb-4">
            Para cada loja você pode:
          </p>
          <ol className="list-decimal list-inside mb-4 text-gray-800">
            <li>Editar configurações básicas</li>
            <li>Alterar design e layout</li>
            <li>Adicionar ou remover produtos</li>
            <li>Configurar promoções</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Organização e Filtros</h2>
          <p className="mb-4">
            Organize suas lojas usando:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Filtro por status</strong> - Ativas, inativas, em manutenção</li>
            <li><strong>Ordenação</strong> - Por vendas, data de criação, nome</li>
            <li><strong>Busca</strong> - Encontre lojas específicas</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Ações Rápidas</h2>
          <p className="mb-4">
            Funcionalidades de acesso rápido:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Visualizar loja</strong> - Abrir em nova aba</li>
            <li><strong>Copiar link</strong> - Compartilhar URL da loja</li>
            <li><strong>Configurações</strong> - Acesso direto às configurações</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1I70yE8qboV0Q6ClC32GabQwukxHW1405/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Minhas Lojas"
        ></iframe>
      </div>
    </div>
  );
};

export default PixelsPage;