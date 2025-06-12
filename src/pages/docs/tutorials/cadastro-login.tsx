import React from "react";

const CadastroLoginPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">📝 Cadastro e Login</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda como criar sua conta e acessar a plataforma Carrinho Digital.
      </p>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tipos de Conta</h2>
          <p className="mb-4">
            A plataforma oferece dois tipos de cadastro:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Pessoa Física:</strong> Ideal para produtores individuais</li>
            <li><strong>Pessoa Jurídica:</strong> Para empresas e CNPJs</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Requisitos para Cadastro</h2>
          <p className="mb-4">
            Para criar sua conta, você precisará fornecer as seguintes informações:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Nome completo</strong> (obrigatório)</li>
            <li><strong>E-mail</strong> válido (obrigatório)</li>
            <li><strong>Senha</strong> com no mínimo 8 caracteres (obrigatório)</li>
            <li><strong>CPF</strong> (para Pessoa Física)</li>
            <li><strong>CNPJ</strong> (para Pessoa Jurídica)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Processo de Cadastro</h2>
          <ol className="list-decimal list-inside mb-4 text-gray-800">
            <li>Acesse a página inicial do Carrinho Digital</li>
            <li>Clique no botão "Criar Conta"</li>
            <li>Selecione o tipo de conta (Pessoa Física ou Jurídica)</li>
            <li>Preencha todos os campos obrigatórios</li>
            <li>Faça seu primeiro login</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas de Segurança</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Use uma senha forte, combinando letras, números e caracteres especiais</li>
            <li>Nunca compartilhe suas credenciais de acesso</li>
            <li>Mantenha seu e-mail de cadastro atualizado</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1K1aACdlw0meFowTL9OP0wUeoJSXuuZu6/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Cadastro e Login"
        ></iframe>
      </div>
    </div>
  );
};

export default CadastroLoginPage;