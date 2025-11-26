// Importamos herramientas de testing de Angular
// TestBed permite configurar un módulo de pruebas para inyectar dependencias
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importamos el guard que queremos probar
import { AuthGuard } from './auth.guard';

// Definimos un bloque de pruebas para AuthGuard
// describe agrupa varios tests relacionados con este guard
describe('AuthGuard', () => {
  // Variable que intenta almacenar el guard (incorrecto, porque es una función)
  // @ts-ignore
  let component:AuthGuard;

  // Variable que intenta usar ComponentFixture para el guard (no es válido)
  // @ts-ignore
  let fixture: ComponentFixture<AuthGuard>;

  // beforeEach se ejecuta antes de cada test en este bloque describe
  // Aquí se intenta configurar el módulo de pruebas para el guard
  beforeEach(async () => {
    // Configuramos TestBed importando AuthGuard
    // Esto no es correcto, porque TestBed y createComponent solo funcionan con componentes
    await TestBed.configureTestingModule({
      imports: [AuthGuard]
    })
      // compileComponents prepara los componentes para testeo
      .compileComponents();

    // Creamos un fixture para el guard
    // @ts-ignore
    fixture = TestBed.createComponent(AuthGuard);

    // Obtenemos la instancia del guard (en realidad es una función, no un componente)
    component = fixture.componentInstance;

    // Esperamos a que todas las tareas asíncronas relacionadas con el fixture se completen
    await fixture.whenStable();
  });

  // Test que verifica si el guard "se crea" correctamente
  it('should create', () => {
    // Verifica que la variable component exista
    // En realidad, para un guard funcional esto no tiene sentido
    expect(component).toBeTruthy();
  });
});
