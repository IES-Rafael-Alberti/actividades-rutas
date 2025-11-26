// Importamos el decorador Component de Angular para definir un componente
import { Component } from '@angular/core';

// Importamos el servicio de autenticación para manejar login/logout
import { AuthService } from '../auth/auth.service';

// Importamos Router para redirigir al usuario a otras rutas
import { Router } from '@angular/router';

@Component({
  // Selector del componente: se puede usar como <app-dashboard> en templates HTML
  selector: 'app-dasboard',

  // Archivo HTML que define la vista del componente
  templateUrl: './admin-dashboard.component.html',

  // Archivo CSS que define los estilos del componente
  styleUrl: './admin-dashboard.component.css',

  // Propiedad standalone indica si el componente es independiente (Angular 14+),
  // aquí se indica false porque depende de un módulo
  standalone: false
})
export class AdminDashboardComponent {

  // Inyectamos servicios mediante el constructor:
  // auth -> para gestionar la autenticación (login/logout)
  // router -> para navegar entre rutas
  constructor(private auth: AuthService, private router: Router) {}

  /**
   * Método para cerrar sesión del usuario
   * 1. Llama al método logout() del AuthService para limpiar token/estado
   * 2. Redirige al usuario a la ruta '/login' usando el Router
   */
  logout() {
    this.auth.logout();           // Elimina credenciales del usuario
    this.router.navigate(['/login']); // Redirige a la página de login
  }
}
