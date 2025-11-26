// Importamos inject desde @angular/core para poder inyectar servicios en un guard standalone
import { inject } from '@angular/core';

// Importamos Router y CanActivateFn desde @angular/router
// Router permite navegar programáticamente a rutas
// CanActivateFn es el tipo de función que define un guard de activación
import { Router, CanActivateFn } from '@angular/router';

// Importamos el servicio de autenticación personalizado
import { AuthService } from '../auth/auth.service';

// Definimos un guard de ruta como función standalone usando CanActivateFn
export const AuthGuard: CanActivateFn = () => {
  // Inyectamos el servicio de autenticación
  const auth = inject(AuthService);

  // Inyectamos el router para poder redirigir al usuario si no está autenticado
  const router = inject(Router);

  // Verificamos si el usuario está logueado usando el método isLoggedIn() del servicio AuthService
  if (!auth.isLoggedIn()) {
    // Si NO está logueado, redirigimos al login
    router.navigate(['/login']);

    // Retornamos false para impedir que la ruta se active
    return false;
  }

  // Si está logueado, permitimos que la ruta se active retornando true
  return true;
};
