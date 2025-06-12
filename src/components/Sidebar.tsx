
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
}

const sidebarItems: SidebarItem[] = [
  {
    id: "overview",
    title: "Overview",
    icon: Home,
    href: "/overview"
  },
  {
    id: "paradigm",
    title: "Paradigm",
    icon: Book,
    children: [
      {
        id: "logical-model",
        title: "Logical model",
        children: [
          { id: "domain-logic", title: "Domain logic", href: "/domain-logic" },
          { id: "properties", title: "Properties", href: "/properties" },
          { id: "actions", title: "Actions", href: "/actions" },
          { id: "events", title: "Events", href: "/events" },
          { id: "constraints", title: "Constraints", href: "/constraints" },
          { id: "view-logic", title: "View logic", href: "/view-logic" }
        ]
      },
      { id: "physical-model", title: "Physical model", href: "/physical-model" },
      { id: "language", title: "Language", href: "/language" }
    ]
  },
  {
    id: "ide",
    title: "IDE",
    icon: Code,
    href: "/ide"
  },
  {
    id: "configuracoes",
    title: "CONFIGURAÇÕES",
    icon: Settings,
    children: [
      { id: "termo-aceite", title: "Termo de Aceite", href: "/termo-aceite" },
      { id: "webhooks", title: "Webhooks", icon: Webhook, href: "/webhooks" },
      {
        id: "api",
        title: "API",
        icon: Database,
        children: [
          { id: "usuario", title: "Usuário", href: "/api/usuario" },
          { id: "tag", title: "Tag", icon: Tag, href: "/api/tag" },
          { id: "produto", title: "Produto", icon: Package, href: "/api/produto" },
          { id: "aula", title: "Aula", href: "/api/aula" },
          { id: "entrega", title: "Entrega", href: "/api/entrega" }
        ]
      },
      { id: "elementor-forms", title: "Elementor Forms Carrinho Digital", href: "/elementor-forms" }
    ]
  },
  {
    id: "suporte",
    title: "SUPORTE",
    icon: Shield,
    children: [
      { id: "checklist-suporte", title: "Checklist do Suporte", icon: CheckSquare, href: "/checklist-suporte" },
      { id: "checklist-lancamento", title: "Checklist de Lançamento", icon: CheckSquare, href: "/checklist-lancamento" },
      { id: "checklist-imagens", title: "Checklist de Imagens", icon: CheckSquare, href: "/checklist-imagens" },
      { id: "criando-aluno", title: "Criando um aluno manualmente", icon: Users, href: "/criando-aluno" }
    ]
  },
  {
    id: "tutoriais",
    title: "TUTORIAIS EXTERNOS",
    icon: GraduationCap,
    children: [
      { id: "nutror-eduzz", title: "Desativando o Nutror ou Alumy na Eduzz", icon: ExternalLink, href: "/nutror-eduzz" },
      { id: "hotmart-club", title: "Desativando o Hotmart Club", icon: ExternalLink, href: "/hotmart-club" },
      { id: "vimeo", title: "Vimeo", icon: Video, href: "/vimeo" },
      { id: "hotmart-player", title: "Hotmart Player", icon: Video, href: "/hotmart-player" }
    ]
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
            !isActive && "text-foreground hover:text-accent-foreground"
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
