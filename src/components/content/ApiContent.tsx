
import { Database } from "lucide-react";
import Breadcrumb from "../Breadcrumb";

const ApiContent = () => {
  return (
    <div className="max-w-4xl">
      <Breadcrumb items={[
        { title: "Configurações" },
        { title: "API" }
      ]} />

      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-green-100 p-2 rounded">
          <Database className="h-6 w-6 text-green-600" />
        </div>
        <h1 className="text-4xl font-bold">API</h1>
      </div>

      <p className="text-lg text-muted-foreground mb-8">
        Saiba como utilizar documentações de API em sua Área de Membro
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Endpoint</h2>
          <p className="mb-4">
            Use o seu domínio Área de Membro para acessar seu realm de consultas.
          </p>
          <p className="mb-4">
            Seu endpoint terá o seguinte formato: <code className="bg-gray-100 px-2 py-1 rounded text-sm">https://(seu-subdominio).Área de Membro.com.br/api/v1</code>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Autenticação</h2>
          <p className="mb-4">
            Para se autenticar você precisa antes criar uma Chave de API da sua Área de Membro.
          </p>
          <p className="mb-4">
            Ela será comunicada em todas as requisições pelo header: <strong>Authorization: (sua-api-key)</strong>
          </p>
          
          <div className="bg-gray-50 border rounded-lg p-4">
            <div className="text-sm text-gray-500 mb-2">Exemplo de header:</div>
            <code className="text-sm">Authorization: sk_test_1234567890abcdef</code>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Datas</h2>
          <p className="mb-4">
            Todas as datas retornadas pela API estão no formato ISO 8601 UTC.
          </p>
          <div className="bg-gray-50 border rounded-lg p-4">
            <div className="text-sm text-gray-500 mb-2">Exemplo:</div>
            <code className="text-sm">2023-12-06T10:30:00Z</code>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Respostas</h2>
          <p className="mb-4">
            Todas as respostas da API são retornadas em formato JSON.
          </p>
          <div className="bg-gray-50 border rounded-lg p-4">
            <div className="text-sm text-gray-500 mb-2">Exemplo - Respostas: 400x</div>
            <pre className="text-sm overflow-x-auto">
{`{
  "error": {
    "code": "invalid_request",
    "message": "O parâmetro 'email' é obrigatório"
  }
}`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ApiContent;
