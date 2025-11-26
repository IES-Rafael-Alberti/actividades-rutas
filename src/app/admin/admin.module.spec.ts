import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminModule } from './admin.module';

/**
 * Bloque de pruebas (test suite) para AdminModule
 * 'describe' agrupa los tests relacionados
 */
describe('AdminModule', () => {
  // Esto no es correcto: AdminModule no es un componente
  let component: AdminModule;
  let fixture: ComponentFixture<AdminModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminModule] // ✅ Se puede importar el módulo
    })
      .compileComponents(); // ❌ compileComponents se usa para componentes, no módulos

    fixture = TestBed.createComponent(AdminModule); // ❌ Error: los módulos no se crean como componentes
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // ❌ Esto no funcionará para un módulo
  });
});
