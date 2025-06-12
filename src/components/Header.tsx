
import { Search, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-2">
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-pink-500">
            <span className="text-sm font-bold text-white">D</span>
          </div>
          <span className="text-lg font-semibold">Central de Ajuda - Docs</span>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="relative max-w-sm hidden sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-10 w-80"
            />
          </div>
          <div className="text-sm text-muted-foreground hidden sm:block">
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              Ctrl + K
            </kbd>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
