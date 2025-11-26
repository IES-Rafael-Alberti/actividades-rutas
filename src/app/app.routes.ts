// Importamos NgModule para definir un módulo de Angular
import { NgModule } from '@angular/core';

// Importamos RouterModule y Routes para configurar el enrutamiento
import { RouterModule, Routes } from '@angular/router';

// Importamos los componentes que se asignarán a rutas específicas
import { InicioComponent } from './inicio/inicio.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';

/**
 * Definición de rutas de la aplicación
 */
export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Redirige la ruta raíz a /inicio
  { path: 'inicio', component: InicioComponent },       // Ruta para la página de inicio
  { path: 'acerca', component: AcercaDeComponent },      // Ruta para la página "Acerca de"
  {
    path: 'usuarios', component: UsuarioComponent,       // Ruta para lista de usuarios
    children: [                                         // Rutas hijas para usuarios específicos
      { path: ':id', component: UsuarioDetalleComponent } // Ruta con parámetro dinámico :id
    ]
  },
  {
    path: 'admin',                                      // Ruta para panel de administración
    canActivate: [AuthGuard],                           // Solo accesible si AuthGuard permite
    loadChildren: () => import('./admin/admin.module')  // Lazy loading del módulo Admin
      .then(m => m.AdminModule)
  },
  { path: 'login', component: LoginComponent },        // Ruta para página de login
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' } // Nota: ruta duplicada, podría eliminarse
];

/**
 * Módulo de routing principal de la aplicación
 * Se importa en AppModule para habilitar el enrutamiento global
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura el router con rutas principales
  exports: [RouterModule]                  // Exporta RouterModule para usar routerLink en toda la app
})
export class AppRoutingModule {}

