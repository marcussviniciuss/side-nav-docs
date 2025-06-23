import React from "react";

const CadastroLoginPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">🔐 Login e Registro</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Primeiros Passos</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda como criar sua conta e fazer login na plataforma educacional.
      </p>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Como Fazer Registro</h2>
          <p className="mb-4">
            Para se registrar na plataforma, siga estes passos:
          </p>
          <ol className="list-decimal list-inside mb-4 text-gray-800">
            <li>Acesse a página de registro</li>
            <li>Preencha seu nome completo</li>
            <li>Digite um e-mail válido</li>
            <li>Crie uma senha segura (mínimo 8 caracteres)</li>
            <li>Confirme a senha</li>
            <li>Aceite os termos de uso</li>
            <li>Clique em "Criar Conta"</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Como Fazer Login</h2>
          <p className="mb-4">
            Para acessar sua conta:
          </p>
          <ol className="list-decimal list-inside mb-4 text-gray-800">
            <li>Vá para a página de login</li>
            <li>Digite seu e-mail cadastrado</li>
            <li>Digite sua senha</li>
            <li>Clique em "Entrar"</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Recuperação de Senha</h2>
          <p className="mb-4">
            Esqueceu sua senha? Veja como recuperar:
          </p>
          <ol className="list-decimal list-inside mb-4 text-gray-800">
            <li>Clique em "Esqueci minha senha"</li>
            <li>Digite seu e-mail cadastrado</li>
            <li>Verifique sua caixa de entrada</li>
            <li>Clique no link recebido por e-mail</li>
            <li>Crie uma nova senha</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas de Segurança</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Use uma senha forte com letras, números e símbolos</li>
            <li>Não compartilhe suas credenciais</li>
            <li>Sempre faça logout em computadores públicos</li>
            <li>Mantenha seu e-mail atualizado</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1og3bJm-gcXxKi1bg9aFbNvYY50qCW6qj/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Login e Registro"
        ></iframe>
      </div>
    </div>
  );
};

export default CadastroLoginPage;