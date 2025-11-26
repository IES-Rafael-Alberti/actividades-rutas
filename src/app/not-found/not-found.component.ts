// Importamos Component desde @angular/core para definir un componente Angular
import { Component } from '@angular/core';

@Component({
  // Selector del componente: nombre que se usará en el HTML para insertarlo
  selector: 'app-not-found',

  // Indicamos que este componente es standalone (independiente de un módulo NgModule)
  standalone: true,

  // Aquí se podrían importar otros componentes, directivas o pipes necesarios para el template
  // Actualmente no se importa nada, por eso está vacío
  imports: [],

  // URL del archivo de plantilla HTML que define la vista del componente
  templateUrl: './not-found.component.html',

  // URL del archivo CSS que define los estilos del componente
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent {
  // Componente simple sin lógica adicional
  // Se utiliza generalmente para mostrar una página 404 cuando la ruta no existe
}
