// Importamos herramientas de testing de Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importamos el componente que vamos a testear
import { AcercaDeComponent } from './acerca-de.component';

/**
 * Bloque de pruebas (test suite) para AcercaDeComponent
 * 'describe' agrupa los tests relacionados
 */
describe('AcercaDeComponent', () => {
  // Variables que almacenarán la instancia del componente y su fixture
  let component: AcercaDeComponent;
  let fixture: ComponentFixture<AcercaDeComponent>;

  /**
   * Se ejecuta antes de cada test
   * Configura el entorno de testing para este componente
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Si el componente NO es standalone, debe ir en declarations, NO imports
      declarations: [AcercaDeComponent]
    })
      .compileComponents(); // Compila el template y estilos del componente

    // Creamos el fixture del componente y obtenemos la instancia
    fixture = TestBed.createComponent(AcercaDeComponent);
    component = fixture.componentInstance;

    // Detecta cambios iniciales en el template
    fixture.detectChanges();
    await fixture.whenStable(); // Espera a que se resuelvan todas las tareas asíncronas
  });

  /**
   * Test: verifica que el componente se crea correctamente
   */
  it('should create', () => {
    expect(component).toBeTruthy(); // Esperamos que la instancia exista
  });
});
