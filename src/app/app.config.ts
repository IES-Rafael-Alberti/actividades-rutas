// Importamos ApplicationConfig, que define la configuración global de la app
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

// Importamos provideRouter para configurar las rutas de la aplicación
import { provideRouter } from '@angular/router';

// Importamos las rutas definidas en otro archivo
import { routes } from './app.routes';

/**
 * Configuración principal de la aplicación (ApplicationConfig)
 * Se usa en Angular standalone apps para definir providers globales y configuración inicial
 */
export const appConfig: ApplicationConfig = {
  providers: [
    // Proveedor que registra listeners globales para errores en el navegador
    provideBrowserGlobalErrorListeners(),

    // Proveedor que configura el enrutador de Angular con las rutas definidas
    provideRouter(routes)
  ]
};
