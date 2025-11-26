// Importamos NgModule para definir un módulo de Angular
import { NgModule } from '@angular/core';

// Importamos RouterModule y Routes para configurar rutas
import { RouterModule, Routes } from '@angular/router';

// Importamos el componente que se mostrará en esta ruta
import { AdminDashboardComponent } from './admin-dashboard.component';

/**
 * Definimos las rutas del módulo de administración
 * Routes es un arreglo de objetos que asocian paths con componentes
 */
const routes: Routes = [
  {
    path: '',                  // Ruta vacía relativa al módulo (ej. /admin)
    component: AdminDashboardComponent // Componente que se mostrará al acceder a esta ruta
  }
];

/**
 * Módulo de routing para la sección de administración
 * Permite encapsular las rutas del admin y exportarlas a otros módulos
 */
@NgModule({
  imports: [
    // Configuramos las rutas hijas para este módulo
    RouterModule.forChild(routes)
  ],
  exports: [
    // Exportamos RouterModule para que las rutas sean accesibles fuera del módulo
    RouterModule
  ]
})
export class AdminRoutingModule { }

