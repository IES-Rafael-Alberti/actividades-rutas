// Importamos Component desde @angular/core para definir un componente Angular
import { Component } from '@angular/core';

// Importamos Router desde @angular/router para poder navegar a otras rutas
import {Router} from '@angular/router';

// Importamos nuestro servicio de autenticación personalizado
import { AuthService } from '../auth/auth.service';

@Component({
  // Selector del componente: nombre que se usará en el HTML para insertarlo
  selector: 'app-login',

  // Indicamos que este componente es standalone (independiente de un módulo NgModule)
  standalone: true,

  // Template inline del componente
  // Contiene un encabezado y un botón que llama al método login() al hacer click
  // Selector del componente: nombre que se usará en el HTML para insertarlo.

  // Aquí se pueden importar otros componentes, directivas o pipes necesarios para el template.
  imports: [],

  // URL del archivo de plantilla HTML que define la vista del componente.
  templateUrl: './login.component.html',

  // URL del archivo CSS que define los estilos del componente.
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // Inyección de dependencias: AuthService para autenticación y Router para navegación
  constructor(private auth: AuthService, private router: Router) {}

  // Método que se ejecuta al hacer click en el botón "Iniciar sesión"
  login() {
    // Llamamos al método login() del servicio de autenticación
    this.auth.login();

    // Navegamos a la ruta '/admin' después de iniciar sesión
    this.router.navigate(['/admin']);
  }
}
