// Importamos Component y signal desde Angular
import { Component, signal } from '@angular/core';

// Importamos Router, RouterLink y RouterOutlet para navegación y enrutamiento
import { Router, RouterLink, RouterOutlet } from '@angular/router';

// Importamos el servicio de autenticación para su posible uso en el componente
import { AuthService } from './auth/auth.service';

/**
 * Componente principal de la aplicación (App)
 * Este componente es standalone, lo que significa que no depende de un NgModule
 */
@Component({
  // Selector HTML para usar este componente en templates
  selector: 'app-root',

  // Indica que este componente es standalone
  standalone: true,

  // Importa otros componentes/directivas necesarias para el template
  imports: [RouterOutlet, RouterLink],

  // Archivo HTML que define la vista del componente
  templateUrl: './app.html',

  // Archivo CSS que define los estilos del componente
  // Nota: debería ser 'styleUrls' (plural), pero aquí se documenta tal como está
  styleUrl: './app.css'
})
export class App {
  /**
   * Propiedad 'title' definida como signal
   * Signal permite crear un valor reactivo que puede ser observado y vinculado al template
   */
  protected readonly title = signal('untitled');
}
