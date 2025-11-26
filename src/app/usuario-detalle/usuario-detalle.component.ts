// Importamos Component y OnInit desde el core de Angular.
// Component nos permite definir un componente y OnInit es un hook del ciclo de vida del componente.
import { Component, OnInit } from '@angular/core';

// Importamos ActivatedRoute desde el router de Angular.
// ActivatedRoute nos permite acceder a información sobre la ruta activa,
// incluyendo parámetros pasados por la URL.
import { ActivatedRoute } from '@angular/router';

@Component({
  // Selector del componente: nombre que se usará en el HTML para insertarlo.
  selector: 'app-usuario-detalle',

  // Definimos que este componente es standalone (independiente de un módulo).
  standalone: true,

  // Aquí se pueden importar otros componentes, directivas o pipes necesarios para el template.
  imports: [],

  // URL del archivo de plantilla HTML que define la vista del componente.
  templateUrl: './usuario-detalle.component.html',

  // URL del archivo CSS que define los estilos del componente.
  styleUrl: './usuario-detalle.component.css',
})
export class UsuarioDetalleComponent implements OnInit {
  // Propiedad que almacenará el ID del usuario obtenido de la ruta.
  // Puede ser string o null en caso de que no exista el parámetro.
  userId: string | null = null;

  // Inyección de dependencias: obtenemos una instancia de ActivatedRoute
  // para poder acceder a los parámetros de la ruta.
  constructor(private route: ActivatedRoute) {}

  // Método del ciclo de vida de Angular que se ejecuta al inicializar el componente.
  ngOnInit() {
    // Nos suscribimos al paramMap, que es un Observable que emite los parámetros de la ruta.
    // Cada vez que los parámetros cambian, la función dentro de subscribe se ejecuta.
    this.route.paramMap.subscribe(paramMap => {
      // Obtenemos el parámetro 'id' de la ruta y lo asignamos a la propiedad userId.
      this.userId = paramMap.get('id');
    });
  }
}
