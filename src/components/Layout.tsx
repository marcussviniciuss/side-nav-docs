
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import DomainLogicContent from "./content/DomainLogicContent";
import ApiContent from "./content/ApiContent";

const Layout = () => {
  const [activeItem, setActiveItem] = useState("domain-logic");

  const handleItemClick = (id: string, href?: string) => {
    console.log("Navigation clicked:", { id, href });
    setActiveItem(id);
  };

  const renderContent = () => {
    switch (activeItem) {
      case "domain-logic":
        return <DomainLogicContent />;
      case "api":
        return <ApiContent />;
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
      <Header />
      <div className="flex flex-1">
        <Sidebar activeItem={activeItem} onItemClick={handleItemClick} />
        <main className="flex-1 p-8 overflow-y-auto">
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
