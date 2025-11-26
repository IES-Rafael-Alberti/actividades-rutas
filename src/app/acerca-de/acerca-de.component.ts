// Importamos Component de Angular para definir un componente
import { Component } from '@angular/core';

/**
 * Componente AcercaDeComponent
 * Este componente puede usarse para mostrar información "Acerca de" la aplicación o empresa
 */
@Component({
  // Selector del componente: se puede usar como <app-acerca-de> en templates HTML
  selector: 'app-acerca-de',

  // Archivo HTML que define la vista del componente
  templateUrl: './acerca-de.component.html',

  // Archivo CSS que define los estilos del componente
  // Nota: el nombre correcto de la propiedad es 'styleUrls' (plural), no 'styleUrl'
  styleUrl: './acerca-de.component.css',
})
export class AcercaDeComponent {
  // Componente básico sin lógica interna por ahora
}

