import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import DomainLogicContent from "./content/DomainLogicContent";
import ApiContent from "./content/ApiContent";
import CadastroLoginPage from "../pages/docs/tutorials/cadastro-login";
import PerfilUsuarioPage from "../pages/docs/tutorials/perfil-usuario";
import CriandoProdutoPage from "../pages/docs/tutorials/criando-produto";
import OfertaPage from "../pages/docs/tutorials/oferta";
import AssinaturaCheckoutPage from "../pages/docs/tutorials/assinatura-checkout";
import DescontosPage from "../pages/docs/tutorials/descontos";
import PixelsPage from "../pages/docs/tutorials/pixels";
import OrderBumpPage from "../pages/docs/tutorials/orderbump";
import ReviewPage from "../pages/docs/tutorials/review";
import ReviewCheckoutPage from "../pages/docs/tutorials/review-checkout";
import ConviteCoprodutorPage from "../pages/docs/tutorials/convite-coprodutor";
import MinhasCoproducoesPage from "../pages/docs/tutorials/minhas-coproducoes";
import VendasPt1Page from "../pages/docs/tutorials/vendas-pt1";
import VendasPt2Page from "../pages/docs/tutorials/vendas-pt2";
import VendasPt3Page from "../pages/docs/tutorials/vendas-pt3";
import VendasPt4Page from "../pages/docs/tutorials/vendas-pt4";
import RecuperacaoAssinaturasPage from "../pages/docs/tutorials/recuperacao-assinaturas";
import FinancasSaquePage from "../pages/docs/tutorials/financas-saque";
import IndiqueGanhePage from "../pages/docs/tutorials/indique-ganhe";
import IndiqueGanheSaquePage from "../pages/docs/tutorials/indique-ganhe-saque";
import WebhooksLogsPage from "../pages/docs/tutorials/webhooks-logs";
import AssistentePage from "../pages/docs/tutorials/assistente";
import DashboardPage from "../pages/docs/tutorials/dashboard";
import HeaderPage from "../pages/docs/tutorials/header";
import LojasPage from "../pages/docs/tutorials/lojas";

const Layout = () => {
  const [activeItem, setActiveItem] = useState("cadastro-login");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleItemClick = (id: string, href?: string) => {
    console.log("Navigation clicked:", { id, href });
    setActiveItem("");
    setTimeout(() => setActiveItem(id), 0);
    console.log("Active item set to:", id);
  };

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  const renderContent = () => {
    switch (activeItem) {
      case "domain-logic":
        return <DomainLogicContent />;
      case "api":
        return <ApiContent />;
      case "cadastro-login":
        return <CadastroLoginPage />;
      case "perfil-usuario":
        return <PerfilUsuarioPage />;
      case "criando-produto":
        return <CriandoProdutoPage />;
      case "oferta":
        return <OfertaPage />;
      case "assinatura-checkout":
        return <AssinaturaCheckoutPage />;
      case "descontos":
        return <DescontosPage />;
      case "pixels":
        return <PixelsPage />;
      case "orderbump":
        return <OrderBumpPage />;
      case "review":
        return <ReviewPage />;
      case "review-checkout":
        return <ReviewCheckoutPage />;
      case "convite-coprodutor":
        return <ConviteCoprodutorPage />;
      case "minhas-coproducoes":
        return <MinhasCoproducoesPage />;
      case "vendas-pt1":
        return <VendasPt1Page />;
      case "vendas-pt2":
        return <VendasPt2Page />;
      case "vendas-pt3":
        return <VendasPt3Page />;
      case "vendas-pt4":
        return <VendasPt4Page />;
      case "recuperacao-assinaturas":
        return <RecuperacaoAssinaturasPage />;
      case "financas-saque":
        return <FinancasSaquePage />;
      case "indique-ganhe":
        return <IndiqueGanhePage />;
      case "indique-ganhe-saque":
        return <IndiqueGanheSaquePage />;
      case "webhooks-logs":
        return <WebhooksLogsPage />;
      case "assistente":
        return <AssistentePage />;
      case "dashboard":
        return <DashboardPage />;
      case "header":
        return <HeaderPage />;
      case "lojas":
        return <LojasPage />;
      case "tutoriaisExternos":
        return <div>Conteúdo da página Tutoriais Externos ainda não implementado.</div>;
      default:
        return (
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-6">Bem-vindo à Documentação</h1>
            <p className="text-lg text-muted-foreground">
              Selecione um tópico no menu lateral para começar a explorar nossa documentação.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onMenuClick={handleMenuClick} />
      <div className="flex flex-1 relative">
        <Sidebar 
          activeItem={activeItem} 
          onItemClick={handleItemClick}
          isOpen={sidebarOpen}
          onClose={handleCloseSidebar}
        />
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          <div className="container max-w-none">
            {renderContent()}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
