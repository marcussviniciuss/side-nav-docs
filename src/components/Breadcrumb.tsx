
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground mb-6">
      <Home className="h-4 w-4" />
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-1">
          <ChevronRight className="h-4 w-4" />
          <span className={cn(
            index === items.length - 1 ? "text-doc-blue font-medium" : "hover:text-foreground cursor-pointer"
          )}>
            {item.title}
          </span>
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
