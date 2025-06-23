
import { Book } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-background py-6">
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Book className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Powered by Área de Membro
          </span>
        </div>
        <div className="text-sm text-muted-foreground">
          © 2024 Área de Membro. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
