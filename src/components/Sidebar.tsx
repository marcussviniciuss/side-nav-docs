import { useState } from "react";
import { ChevronDown, ChevronRight, ExternalLink, X } from "lucide-react";
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
    id: "cadastro-login",
    title: "🔐 Login e Registro",
    href: "/docs/tutorials/cadastro-login"
  },
  {
    id: "perfil-usuario",
    title: "📊 Dashboard",
    href: "/docs/tutorials/perfil-usuario"
  },
  {
    id: "criando-produto",
    title: "📚 Cursos - Meus Cursos",
    href: "/docs/tutorials/criando-produto"
  },
  {
    id: "oferta",
    title: "✏️ Cursos - Editar Curso",
    href: "/docs/tutorials/oferta"
  },
  {
    id: "assinatura-checkout",
    title: "✅ Cursos - Aprovar Comentários",
    href: "/docs/tutorials/assinatura-checkout"
  },
  {
    id: "descontos",
    title: "🏪 Lojas - Criar Loja",
    href: "/docs/tutorials/descontos"
  },
  {
    id: "pixels",
    title: "🏬 Lojas - Minhas Lojas",
    href: "/docs/tutorials/pixels"
  },
  {
    id: "orderbump",
    title: "🎓 Certificados",
    href: "/docs/tutorials/orderbump"
  },
  {
    id: "review",
    title: "📈 Relatórios",
    href: "/docs/tutorials/review"
  },
  {
    id: "review-checkout",
    title: "👥 Alunos",
    href: "/docs/tutorials/review-checkout"
  },
  {
    id: "convite-coprodutor",
    title: "📺 Live",
    href: "/docs/tutorials/convite-coprodutor"
  },
  {
    id: "minhas-coproducoes",
    title: "💰 Vendas",
    href: "/docs/tutorials/minhas-coproducoes"
  },
  {
    id: "vendas-pt1",
    title: "💳 Gateway",
    href: "/docs/tutorials/vendas-pt1"
  },
  {
    id: "vendas-pt2",
    title: "📄 Faturas",
    href: "/docs/tutorials/vendas-pt2"
  },
  {
    id: "vendas-pt3",
    title: "🔗 Webhooks",
    href: "/docs/tutorials/vendas-pt3"
  },
  {
    id: "vendas-pt4",
    title: "🌐 Configurações Domínios",
    href: "/docs/tutorials/vendas-pt4"
  },
  {
    id: "recuperacao-assinaturas",
    title: "👤 Meu Perfil",
    href: "/docs/tutorials/recuperacao-assinaturas"
  },
  {
    id: "financas-saque",
    title: "🔑 Redefinir Senha",
    href: "/docs/tutorials/financas-saque"
  },
  {
    id: "indique-ganhe",
    title: "🔐 Redefinir Senha",
    href: "/docs/tutorials/indique-ganhe"
  },
  {
    id: "tutoriaisExternos",
    title: "Ir para a Área de Membro",
    icon: ExternalLink,
    href: "https://areademembro.com.br",
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

