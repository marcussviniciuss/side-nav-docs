import React from "react";

const FinancasSaquePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">🔑 Redefinir Senha</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Segurança da Conta</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda como redefinir sua senha de forma segura e manter sua conta protegida.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Redefinindo a Senha</h2>
          <p className="mb-4">
            Processo para alterar sua senha:
          </p>
          <ol className="list-decimal list-inside mb-4 text-gray-800">
            <li>Acesse a página de login</li>
            <li>Clique em "Esqueci minha senha"</li>
            <li>Digite seu email cadastrado</li>
            <li>Verifique sua caixa de entrada</li>
            <li>Clique no link recebido</li>
            <li>Crie uma nova senha segura</li>
            <li>Confirme a nova senha</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Senha Segura</h2>
          <p className="mb-4">
            Características de uma boa senha:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Mínimo 8 caracteres</strong> - Preferencialmente 12+</li>
            <li><strong>Letras maiúsculas e minúsculas</strong> - Variação de casos</li>
            <li><strong>Números</strong> - Pelo menos um dígito</li>
            <li><strong>Símbolos especiais</strong> - !@#$%^&*</li>
            <li><strong>Única</strong> - Não reutilize em outros sites</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas de Segurança</h2>
          <p className="mb-4">
            Mantenha sua conta protegida:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Não compartilhe</strong> - Mantenha sua senha privada</li>
            <li><strong>Troque regularmente</strong> - A cada 3-6 meses</li>
            <li><strong>Use gerenciador</strong> - Para senhas complexas</li>
            <li><strong>Evite informações pessoais</strong> - Nome, data de nascimento</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Autenticação de Dois Fatores</h2>
          <p className="mb-4">
            Adicione uma camada extra de segurança:
          </p>
          <ol className="list-decimal list-inside mb-4 text-gray-800">
            <li>Ative a autenticação de dois fatores</li>
            <li>Configure um app autenticador</li>
            <li>Salve os códigos de backup</li>
            <li>Teste o funcionamento</li>
            <li>Mantenha o app atualizado</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Problemas Comuns</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Email não chegou - Verifique spam</li>
            <li>Link expirado - Solicite novo</li>
            <li>Senha não aceita - Verifique critérios</li>
            <li>Conta bloqueada - Entre em contato com suporte</li>
            <li>Erro no sistema - Tente mais tarde</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1BdhA2iCaCroT8QMbg4k0teC158dupHRv/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Redefinir Senha"
        ></iframe>
      </div>
    </div>
  );
};

export default FinancasSaquePage;