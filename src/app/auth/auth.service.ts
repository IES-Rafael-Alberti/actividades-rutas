// Importamos Injectable para poder inyectar este servicio en otros componentes o servicios
import { Injectable } from '@angular/core';

/**
 * Servicio de autenticación sencillo
 * @providedIn 'root' indica que el servicio es singleton y está disponible en toda la aplicación
 */
@Injectable({ providedIn: 'root' })
export class AuthService {

  // Propiedad privada que almacena el estado de autenticación del usuario
  private loggedIn = false;

  /**
   * Método para verificar si el usuario está autenticado
   * @returns boolean - true si el usuario está logueado, false si no
   */
  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  /**
   * Método para simular el login del usuario
   * Cambia la propiedad loggedIn a true
   */
  login() {
    this.loggedIn = true;
  }

  /**
   * Método para cerrar sesión del usuario
   * Cambia la propiedad loggedIn a false
   */
  logout() {
    this.loggedIn = false;
  }
}
