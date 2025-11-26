// Importamos herramientas de testing de Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importamos el componente que vamos a testear
import { AdminDashboardComponent } from './admin-dashboard.component';

/**
 * Bloque de pruebas (test suite) para el componente AdminDashboardComponent
 * 'describe' agrupa un conjunto de tests relacionados
 */
describe('AdminDashboardComponent', () => {

  // Variables que almacenarán la instancia del componente y el fixture
  let component: AdminDashboardComponent;
  let fixture: ComponentFixture<AdminDashboardComponent>;

  /**
   * Se ejecuta antes de cada test.
   * Configura el entorno de testing para este componente.
   */
  beforeEach(async () => {
    // Configuramos un módulo de prueba para el componente
    await TestBed.configureTestingModule({
      imports: [AdminDashboardComponent] // Declaramos el componente standalone
    })
      .compileComponents(); // Compila el template y los estilos del componente

    // Creamos una instancia del componente y su fixture (wrapper de testing)
    fixture = TestBed.createComponent(AdminDashboardComponent);
    component = fixture.componentInstance;

    // Espera a que todas las tareas asíncronas del fixture se completen
    await fixture.whenStable();
  });

  /**
   * Test: verifica que el componente se crea correctamente
   */
  it('should create', () => {
    expect(component).toBeTruthy(); // Esperamos que la instancia del componente exista
  });
});
