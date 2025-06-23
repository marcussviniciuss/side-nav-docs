import React from "react";

const IndiqueGanhePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">🔐 Redefinir Senha</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Recuperação de Acesso</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Guia completo para recuperar o acesso à sua conta quando você esqueceu sua senha.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Quando Usar</h2>
          <p className="mb-4">
            Situações que requerem redefinição de senha:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Esqueceu a senha</strong> - Não lembra da senha atual</li>
            <li><strong>Conta comprometida</strong> - Suspeita de acesso não autorizado</li>
            <li><strong>Senha muito antiga</strong> - Não alterada há muito tempo</li>
            <li><strong>Senha fraca</strong> - Quer melhorar a segurança</li>
            <li><strong>Mudança de dispositivo</strong> - Novo computador/celular</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Processo Passo a Passo</h2>
          <p className="mb-4">
            Como redefinir sua senha:
          </p>
          <ol className="list-decimal list-inside mb-4 text-gray-800">
            <li>Vá para a página de login</li>
            <li>Clique em "Esqueci minha senha"</li>
            <li>Insira seu email cadastrado</li>
            <li>Clique em "Enviar link de recuperação"</li>
            <li>Verifique sua caixa de entrada</li>
            <li>Clique no link recebido por email</li>
            <li>Crie uma nova senha forte</li>
            <li>Confirme a nova senha</li>
            <li>Faça login com a nova senha</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Verificação de Email</h2>
          <p className="mb-4">
            O que fazer se não receber o email:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Verifique o spam</strong> - Pode estar na caixa de spam</li>
            <li><strong>Aguarde alguns minutos</strong> - Pode haver atraso</li>
            <li><strong>Verifique o email</strong> - Certifique-se que está correto</li>
            <li><strong>Tente novamente</strong> - Solicite um novo link</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Criando Nova Senha</h2>
          <p className="mb-4">
            Requisitos para uma senha segura:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Pelo menos 8 caracteres</strong> - Quanto mais, melhor</li>
            <li><strong>Misture maiúsculas e minúsculas</strong> - Varie os casos</li>
            <li><strong>Inclua números</strong> - Pelo menos um dígito</li>
            <li><strong>Use símbolos</strong> - Caracteres especiais</li>
            <li><strong>Evite dados pessoais</strong> - Nome, data de nascimento</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Após Redefinir</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Anote a nova senha em local seguro</li>
            <li>Atualize a senha em outros dispositivos</li>
            <li>Configure autenticação de dois fatores</li>
            <li>Revise configurações de segurança</li>
            <li>Monitore atividades suspeitas</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1oVYy4t-1B-7LeBXgfRo2mYcbHTjnZWgQ/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Redefinir Senha"
        ></iframe>
      </div>
    </div>
  );
};

export default IndiqueGanhePage;