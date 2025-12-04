import { Link, useLocation } from "react-router-dom";
import { Home, FolderOpen, Briefcase, Edit } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, path: "/", label: "Home" },
    { icon: FolderOpen, path: "/projects", label: "Projects" },
    { icon: Briefcase, path: "/experience", label: "Experience" },
    { icon: Edit, path: "/writings", label: "Writings" },
  ];

  return (
    <nav className="fixed top-4 md:top-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black/80 backdrop-blur-md border border-white/20 rounded-full px-3 md:px-4 py-0.5 md:py-1 flex space-x-8 md:space-x-3 shadow-lg">
        {navItems.map(({ icon: Icon, path, label }) => (
          <Link
            key={path}
            to={path}
            className={`p-1.5 md:p-2 rounded-full transition-all duration-200 ${
              location.pathname === path
                ? "bg-white text-black"
                : "text-portfolio-text-muted hover:text-foreground hover:bg-muted"
            }`}
            title={label}
          >
            <Icon size={16} className="md:w-5 md:h-5" />
          </Link>
        ))}
      </div>
    </nav>
  );
};
