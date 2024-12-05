import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src="/lovable-uploads/f8ab624a-3e37-4196-924c-4ad0683f7586.png"
                alt="Logo"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {isMobile ? (
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                to="/products"
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Productos
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Contacto
              </Link>
              <Link
                to="/location"
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Ubicación
              </Link>
              <Link to="/login">
                <Button variant="outline" className="ml-4">
                  Iniciar Sesión
                </Button>
              </Link>
              <Link to="/register">
                <Button>Registrarse</Button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile menu */}
        {isMobile && isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/products"
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                Productos
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                Contacto
              </Link>
              <Link
                to="/location"
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                Ubicación
              </Link>
              <Link
                to="/login"
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/register"
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                Registrarse
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};