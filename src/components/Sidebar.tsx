import { useState } from "react";
import { ChevronDown, ChevronRight, Home, Settings, Book, Code, Database, Shield, Webhook, Users, Tag, Package, GraduationCap, Video, CheckSquare, ExternalLink, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarItem {
  id: string;
  title: string;
  icon?: React.ComponentType<any>;
  children?: SidebarItem[];
  href?: string;
  className?: string;
}

const sidebarItems: SidebarItem[] = [
  {
    id: "overview",
    title: "🏠 Visão Geral",
    href: "/overview"
  },
  {
    id: "cadastro-login",
    title: "📝 Cadastro e Login",
    href: "/docs/tutorials/cadastro-login"
  },
  {
    id: "perfil-usuario",
    title: "👤 Perfil de Usuário",
    href: "/docs/tutorials/perfil-usuario"
  },
  {
    id: "criando-produto",
    title: "📦 Criando um Produto",
    href: "/docs/tutorials/criando-produto"
  },
  {
    id: "oferta",
    title: "🎁 Oferta",
    href: "/docs/tutorials/oferta"
  },
  {
    id: "assinatura-checkout",
    title: "🛒 Assinatura + Checkout",
    href: "/docs/tutorials/assinatura-checkout"
  },
  {
    id: "descontos",
    title: "💸 Descontos",
    href: "/docs/tutorials/descontos"
  },
  {
    id: "pixels",
    title: "📡 Pixels",
    href: "/docs/tutorials/pixels"
  },
  {
    id: "orderbump",
    title: "🎯 OrderBump",
    href: "/docs/tutorials/orderbump"
  },
  {
    id: "review",
    title: "⭐ Review",
    href: "/docs/tutorials/review"
  },
  {
    id: "review-checkout",
    title: "🛒 Review no checkout",
    href: "/docs/tutorials/review-checkout"
  },
  {
    id: "convite-coprodutor",
    title: "🤝 Convite co-produtor (Visão produtor)",
    href: "/docs/tutorials/convite-coprodutor"
  },
  {
    id: "minhas-coproducoes",
    title: "🤝 Minhas co-produções (Visão co-produtor)",
    href: "/docs/tutorials/minhas-coproducoes"
  },
  {
    id: "vendas-pt1",
    title: "💰 Vendas - parte 1",
    href: "/docs/tutorials/vendas-pt1"
  },
  {
    id: "vendas-pt2",
    title: "💰 Vendas - parte 2",
    href: "/docs/tutorials/vendas-pt2"
  },
  {
    id: "vendas-pt3",
    title: "💰 Vendas - parte 3",
    href: "/docs/tutorials/vendas-pt3"
  },
  {
    id: "vendas-pt4",
    title: "💰 Vendas - parte 4",
    href: "/docs/tutorials/vendas-pt4"
  },
  {
    id: "recuperacao-assinaturas",
    title: "🔄 Recuperação e Assinaturas",
    href: "/docs/tutorials/recuperacao-assinaturas"
  },
  {
    id: "financas-saque",
    title: "💵 Finanças (Saque)",
    href: "/docs/tutorials/financas-saque"
  },
  {
    id: "indique-ganhe",
    title: "🎁 Indique e Ganhe",
    href: "/docs/tutorials/indique-ganhe"
  },
  {
    id: "indique-ganhe-saque",
    title: "💰 Indique e Ganhe (Saque)",
    href: "/docs/tutorials/indique-ganhe-saque"
  },
  {
    id: "webhooks-logs",
    title: "🔗 Webhooks + Logs",
    href: "/docs/tutorials/webhooks-logs"
  },
  {
    id: "assistente",
    title: "🧑‍💻 Assistente",
    href: "/docs/tutorials/assistente"
  },
  {
    id: "dashboard",
    title: "📊 Dashboard",
    href: "/docs/tutorials/dashboard"
  },
  {
    id: "lojas",
    title: "🏬 Lojas",
    href: "/docs/tutorials/lojas"
  },
  {
    id: "header",
    title: "🧩 Header",
    href: "/docs/tutorials/header"
  },
  {
    id: "tutoriaisExternos",
    title: "Ir para a Carrinho",
    icon: ExternalLink,
    href: "https://carrinhodigital.com",
    className: "text-blue-500 hover:text-blue-600"
  }
];
interface SidebarProps {
  activeItem: string;
  onItemClick: (id: string, href?: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ activeItem, onItemClick, isOpen, onClose }: SidebarProps) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(["paradigm", "logical-model", "configuracoes", "api"]));

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const handleItemClick = (id: string, href?: string) => {
    if (id === "tutoriaisExternos" && href) {
      window.open(href, '_blank');
      return;
    }
    onItemClick(id, href);
    // Close sidebar on mobile after selection
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  const renderSidebarItem = (item: SidebarItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.id);
    const isActive = activeItem === item.id;
    const Icon = item.icon;

    return (
      <div key={item.id}>
        <button
          onClick={() => {
            if (hasChildren) {
              toggleExpanded(item.id);
            } else {
              handleItemClick(item.id, item.href);
            }
          }}
          className={cn(
            "w-full flex items-center justify-between py-2 px-3 text-left text-sm rounded-md transition-colors hover:bg-accent min-w-0",
            level > 0 && "ml-4",
            level > 1 && "ml-8",
            isActive && "bg-doc-blue text-white hover:bg-doc-blue/90",
            !isActive && "text-foreground hover:text-accent-foreground",
            item.className
          )}
          style={{ paddingLeft: `${12 + level * 16}px` }}
        >
          <div className="flex items-center space-x-2 min-w-0 flex-1">
            {Icon && <Icon className="h-4 w-4 flex-shrink-0" />}
            <span className={cn(
              "truncate",
              level === 0 && item.title === item.title.toUpperCase() && "text-xs font-semibold text-muted-foreground"
            )}>
              {item.title}
            </span>
          </div>
          {hasChildren && (
            <div className="flex-shrink-0">
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </div>
          )}
        </button>
        {hasChildren && isExpanded && (
          <div className="mt-1">
            {item.children!.map(child => renderSidebarItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed md:relative inset-y-0 left-0 z-40 w-80 border-r bg-sidebar transform transition-transform duration-300 ease-in-out md:translate-x-0 overflow-hidden",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between p-4 border-b md:hidden">
          <span className="font-semibold">Menu</span>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="p-4 overflow-y-auto h-full">
          <nav className="space-y-1">
            {sidebarItems.map(item => renderSidebarItem(item))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

