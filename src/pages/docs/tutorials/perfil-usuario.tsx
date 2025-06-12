import React from "react";

const PerfilUsuarioPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">👤 Perfil de Usuário</h1>
      <h2 className="text-sm font-semibold text-pink-600 uppercase mb-2">Comece por aqui</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Aprenda como gerenciar seu perfil, documentos e informações de pagamento na plataforma Carrinho Digital.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Documentos</h2>
          <p className="mb-4">
            Dependendo do tipo da sua conta, você precisará fornecer diferentes documentos:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Pessoa Física</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li><strong>CPF</strong> - Documento obrigatório</li>
                <li><strong>RG</strong> ou documento com foto</li>
                <li><strong>Comprovante de Residência</strong> (últimos 3 meses)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Pessoa Jurídica</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li><strong>CNPJ</strong> - Documento obrigatório</li>
                <li><strong>Contrato Social</strong> ou Estatuto</li>
                <li><strong>Comprovante de Residência</strong> da empresa</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dados de Pagamento</h2>
          <p className="mb-4">
            Configure sua chave PIX para receber pagamentos:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Adicione sua chave PIX (CPF/CNPJ, e-mail, telefone ou chave aleatória)</li>
            <li>Verifique se a chave está ativa</li>
            <li>Confirme os dados antes de salvar</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Endereço</h2>
          <p className="mb-4">
            Cadastre seu endereço completo:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>CEP (com validação automática)</li>
            <li>Endereço completo (rua, número, complemento)</li>
            <li>Bairro, cidade e estado</li>
            <li>Comprovante de residência atualizado</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Como Fazer Upload</h2>
          <ol className="list-decimal list-inside mb-4 text-gray-800">
            <li>Acesse a seção "Documentos" no seu perfil</li>
            <li>Selecione o tipo de documento que deseja enviar</li>
            <li>Escolha o arquivo do seu computador (PDF, JPG ou PNG)</li>
            <li>Verifique se o documento está legível</li>
            <li>Clique em "Enviar" e aguarde a confirmação</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dicas Importantes</h2>
          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li>Mantenha seus documentos sempre atualizados</li>
            <li>Verifique se as imagens estão nítidas e legíveis</li>
            <li>O comprovante de residência deve ter no máximo 3 meses</li>
            <li>Mantenha sua chave PIX atualizada para receber pagamentos</li>
          </ul>
        </section>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-6 mt-8">📺 Vídeo Aula</h2>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-md shadow-lg"
          src="https://drive.google.com/file/d/1OljrrOm0lSDSSvm1fKBr5qOyhBk5ZG1f/preview"
          frameBorder="0"
          allowFullScreen
          title="Vídeo de Perfil de Usuário"
        ></iframe>
      </div>
    </div>
  );
};

export default PerfilUsuarioPage;