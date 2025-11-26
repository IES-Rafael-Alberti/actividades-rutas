// Importamos NgModule para definir un módulo de Angular
import { NgModule } from '@angular/core';

// Importamos CommonModule para usar directivas comunes de Angular como *ngIf, *ngFor
import { CommonModule } from '@angular/common';

// Importamos RouterModule y Routes para configurar rutas específicas del módulo
import { RouterModule, Routes } from '@angular/router';

// Importamos el componente que será mostrado en la ruta principal del módulo
import { AdminDashboardComponent } from '../dasboard/admin-dashboard.component';

/**
 * Definimos las rutas del módulo de administración
 * Al acceder a la ruta base del módulo, se mostrará AdminDashboardComponent
 */
const routes: Routes = [
  { path: '', component: AdminDashboardComponent }
];

/**
 * Módulo de administración
 * Agrupa componentes y rutas relacionados con la sección de administración
 */
@NgModule({
  // Declaramos los componentes que pertenecen a este módulo
  declarations: [AdminDashboardComponent],

  // Importamos módulos necesarios:
  // CommonModule -> directivas comunes de Angular
  // RouterModule.forChild(routes) -> rutas específicas del módulo
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule {}
