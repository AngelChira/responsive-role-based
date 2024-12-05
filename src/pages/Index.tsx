import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div
          className="relative h-[600px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/lovable-uploads/f8ab624a-3e37-4196-924c-4ad0683f7586.png')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                BIENVENIDO A NOVEDADES ISIDORA
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Descubre nuestra colección de calzado
              </p>
              <Link to="/products">
                <Button size="lg" className="bg-accent text-primary font-bold">
                  Ver Productos
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Calidad Premium</h3>
                <p className="text-gray-600">
                  Productos de la más alta calidad para nuestros clientes
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Envío Rápido</h3>
                <p className="text-gray-600">
                  Entrega a todo el país en tiempo récord
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Atención 24/7</h3>
                <p className="text-gray-600">
                  Estamos aquí para ayudarte en todo momento
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <p>Email: info@novedadesisidora.com</p>
              <p>Teléfono: (123) 456-7890</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="hover:text-accent">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-accent">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-accent">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-accent">
                  Facebook
                </a>
                <a href="#" className="hover:text-accent">
                  Instagram
                </a>
                <a href="#" className="hover:text-accent">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Novedades Isidora. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;