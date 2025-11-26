// Importamos Component desde @angular/core para definir un componente Angular
import { Component } from '@angular/core';

// Importamos RouterLink y RouterOutlet para manejo de navegación y rutas en el template
// RouterLink permite crear enlaces de navegación dentro del template
// RouterOutlet define un espacio donde se renderizarán los componentes de rutas hijas
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  // Selector del componente: nombre que se usará en el HTML para insertarlo
  selector: 'app-usuario',

  // Indicamos que este componente es standalone (independiente de un módulo NgModule)
  standalone: true,

  // Importamos las dependencias necesarias para el template
  // RouterLink para enlaces de navegación, RouterOutlet para mostrar rutas hijas
  imports: [
    RouterLink,
    RouterOutlet
  ],

  // URL del archivo de plantilla HTML que define la vista del componente
  templateUrl: './usuario.component.html',

  // URL del archivo CSS que define los estilos del componente
  styleUrl: './usuario.component.css',
})
export class UsuarioComponent {
  // Array de usuarios de ejemplo, con id y nombre
  // Esta información podría provenir de un servicio en un caso real
  usuarios = [
    { id: 1, nombre: 'Alice' },
    { id: 2, nombre: 'Bob' },
    { id: 3, nombre: 'Charlie' }
  ];
}
