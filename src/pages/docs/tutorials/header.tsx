import React from "react";

const HeaderPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">🧩 Header</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Controle a navegação e acesse as principais funcionalidades da plataforma Carrinho Digital através do header.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Controle de Navegação</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">📱 Sidebar</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Abrir menu lateral</li>
                <li>Fechar menu lateral</li>
                <li>Alternar visibilidade</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">🏬 Gerenciamento de Lojas</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Alternar entre lojas</li>
                <li>Criar nova loja</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Acesso ao Usuário</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">👤 Perfil</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Acessar configurações</li>
                <li>Visualizar dados pessoais</li>
                <li>Gerenciar preferências</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">🚪 Sair</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Encerrar sessão</li>
                <li>Confirmar saída</li>
                <li>Retornar à tela de login</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas Importantes</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Use o menu lateral para navegação rápida</li>
            <li>Mantenha a loja correta selecionada</li>
            <li>Verifique suas configurações no perfil</li>
            <li>Lembre-se de fazer logout ao sair</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1BCWBuHJ7fFpcbwMSUyhzijCFAAacgFh_/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Header"
        ></iframe>
      </div>
    </div>
  );
};

export default HeaderPage;