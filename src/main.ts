// Importa la función bootstrapApplication de Angular
// Se utiliza para arrancar aplicaciones standalone (Angular 16+)
import { bootstrapApplication } from '@angular/platform-browser';

// Importa la configuración global de la aplicación (ApplicationConfig)
import { appConfig } from './app/app.config';

// Importa el componente raíz de la aplicación
import { App } from './app/app';

/**
 * Inicializa la aplicación Angular usando el componente raíz y la configuración
 * bootstrapApplication reemplaza el clásico AppModule en apps standalone
 */
bootstrapApplication(App, appConfig)
  // Captura errores que puedan ocurrir durante el arranque de la app
  .catch((err) => console.error(err));
