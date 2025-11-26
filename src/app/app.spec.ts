// Importamos TestBed de Angular para configurar el entorno de pruebas
import { TestBed } from '@angular/core/testing';

// Importamos el componente principal de la aplicación
import { App } from './app';

/**
 * Bloque de pruebas (test suite) para el componente App
 * 'describe' agrupa los tests relacionados
 */
describe('App', () => {

  /**
   * Se ejecuta antes de cada test
   * Configura el entorno de testing del componente
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Importa el componente principal en el módulo de pruebas
      imports: [App],
    }).compileComponents(); // Compila el template y los estilos del componente
  });

  /**
   * Test: verifica que el componente se crea correctamente
   */
  it('should create the app', () => {
    // Crea el fixture del componente
    const fixture = TestBed.createComponent(App);
    // Obtiene la instancia del componente desde el fixture
    const app = fixture.componentInstance;
    // Verifica que la instancia exista
    expect(app).toBeTruthy();
  });

  /**
   * Test: verifica que el título se renderiza correctamente en el DOM
   */
  it('should render title', async () => {
    // Crea el fixture del componente
    const fixture = TestBed.createComponent(App);
    // Espera a que Angular estabilice cualquier tarea asíncrona
    await fixture.whenStable();
    // Obtiene el DOM renderizado del componente
    const compiled = fixture.nativeElement as HTMLElement;
    // Verifica que el <h1> contenga el texto esperado
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, untitled');
  });
});
