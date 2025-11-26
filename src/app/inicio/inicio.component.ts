// Importamos Component desde @angular/core para definir un componente Angular
import { Component } from '@angular/core';

// Importamos ActivatedRoute y Router desde @angular/router
// Router permite navegar programáticamente a otras rutas
// ActivatedRoute permite acceder a parámetros y query params de la ruta actual
import { ActivatedRoute, Router } from '@angular/router';

// Importamos NgIf desde @angular/common para usar la directiva *ngIf en el template
import { NgIf } from '@angular/common';

@Component({
  // Selector del componente: nombre que se usará en el HTML para insertarlo
  selector: 'app-inicio',

  // Indicamos que el componente es standalone (independiente de un módulo)
  standalone: true,

  // Importamos NgIf para usar condicionales en el template
  imports: [NgIf],

  // URL del archivo HTML que define la vista del componente
  templateUrl: './inicio.component.html',

  // URL del archivo CSS que define los estilos del componente
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  // Propiedad que indica si la promoción está activa
  promoActiva = false;

  // Constructor donde se inyectan Router y ActivatedRoute
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Nos suscribimos a los queryParams de la ruta
    // Cada vez que cambien los parámetros de la URL, actualizamos promoActiva
    this.route.queryParams.subscribe(params => {
      // Si el parámetro 'promo' es 'blackFriday', activamos la promoción
      this.promoActiva = params['promo'] === 'blackFriday';
    });
  }

  // Método para activar la promoción
  // Actualiza los query params agregando promo=blackFriday
  activarPromo() {
    this.router.navigate([], {
      relativeTo: this.route,      // Mantiene la ruta actual
      queryParams: { promo: 'blackFriday' }, // Añade/actualiza el query param 'promo'
      queryParamsHandling: 'merge' // Mantiene otros query params existentes
    });
  }

  // Método para desactivar la promoción
  // Elimina el query param 'promo' de la URL
  desactivarPromo() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { promo: null }, // Eliminamos el query param 'promo'
      queryParamsHandling: 'merge' // Mantiene otros query params existentes
    });
  }
}
