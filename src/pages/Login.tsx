import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/dashboard");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div>
            <img
              src="/lovable-uploads/de526f8d-7f28-487c-a794-2354f5a2e0fb.png"
              alt="Logo"
              className="mx-auto h-16 w-auto"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Bienvenido a Novedades Isidora
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Inicia sesión o regístrate para continuar
            </p>
          </div>
          <div className="mt-8">
            <Auth
              supabaseClient={supabase}
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: '#1a237e',
                      brandAccent: '#151b60',
                    },
                  },
                },
                className: {
                  container: 'auth-container',
                  button: 'auth-button',
                  input: 'auth-input',
                },
              }}
              theme="light"
              providers={["google", "facebook"]}
              redirectTo={`${window.location.origin}/dashboard`}
              localization={{
                variables: {
                  sign_in: {
                    email_label: "Correo electrónico",
                    password_label: "Contraseña",
                    button_label: "Iniciar sesión",
                    loading_button_label: "Iniciando sesión...",
                    social_provider_text: "Iniciar sesión con {{provider}}",
                    link_text: "¿Ya tienes una cuenta? Inicia sesión",
                  },
                  sign_up: {
                    email_label: "Correo electrónico",
                    password_label: "Contraseña",
                    button_label: "Registrarse",
                    loading_button_label: "Registrando...",
                    social_provider_text: "Registrarse con {{provider}}",
                    link_text: "¿No tienes una cuenta? Regístrate",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;