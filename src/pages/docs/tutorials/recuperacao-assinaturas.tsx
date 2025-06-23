import React from "react";

const RecuperacaoAssinaturasPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">👤 Meu Perfil</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Configurações Pessoais</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda como gerenciar e atualizar suas informações pessoais e configurações de conta.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Informações Básicas</h2>
          <p className="mb-4">
            Mantenha seus dados atualizados:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Nome completo</strong> - Como aparece nos certificados</li>
            <li><strong>Email</strong> - Para comunicações importantes</li>
            <li><strong>Telefone</strong> - Contato de emergência</li>
            <li><strong>Foto de perfil</strong> - Imagem pessoal</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Configurações de Conta</h2>
          <p className="mb-4">
            Ajuste suas preferências:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Senha</strong> - Altere regularmente</li>
            <li><strong>Autenticação de dois fatores</strong> - Maior segurança</li>

          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dados Fiscais</h2>
          <p className="mb-4">
            Informações para emissão de notas:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>CPF/CNPJ</strong> - Documento fiscal</li>
          </ul>
        </section>

      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/185DyXF_CQ9yy1nt17JEgHi3vvZQEWvCT/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Meu Perfil"
        ></iframe>
      </div>
    </div>
  );
};

export default RecuperacaoAssinaturasPage;