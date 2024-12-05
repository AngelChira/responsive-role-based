import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, Package, Users, ShoppingCart, Settings, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

export const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  const menuItems = [
    { title: "Inicio", icon: Home, url: "/dashboard" },
    { title: "Productos", icon: Package, url: "/products" },
    { title: "Usuarios", icon: Users, url: "/users" },
    { title: "Ventas", icon: ShoppingCart, url: "/sales" },
    { title: "Configuración", icon: Settings, url: "/settings" },
  ];

  return (
    <div className="min-h-screen flex">
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Panel de Administración</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="flex items-center gap-2">
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
                <SidebarMenuItem>
                  <SidebarMenuButton onClick={handleLogout} className="flex items-center gap-2 text-red-600">
                    <LogOut className="h-5 w-5" />
                    <span>Cerrar Sesión</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Bienvenido, Administrador</h1>
        {/* Add your admin dashboard content here */}
      </main>
    </div>
  );
};