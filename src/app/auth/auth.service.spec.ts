// Importamos herramientas de testing de Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importamos el servicio que vamos a testear
import { AuthService } from './auth.service';

/**
 * Bloque de pruebas (test suite) para AuthService
 * 'describe' agrupa los tests relacionados
 */
describe('AuthService', () => {
  // Aquí se guarda la instancia del servicio
  let service: AuthService;

  /**
   * Se ejecuta antes de cada test
   * Configura el entorno de testing y crea la instancia del servicio
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [AuthService] // Se debe usar providers, NO imports, ya que es un servicio
    }).compileComponents(); // compileComponents no es necesario para servicios, pero no rompe el test

    // Obtenemos la instancia del servicio desde TestBed
    service = TestBed.inject(AuthService);
  });

  /**
   * Test: verifica que el servicio se crea correctamente
   */
  it('should create', () => {
    expect(service).toBeTruthy(); // Esperamos que la instancia exista
  });
});
