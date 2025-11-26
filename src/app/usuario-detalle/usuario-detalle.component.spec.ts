// Importamos las herramientas necesarias para realizar tests en Angular
// ComponentFixture nos permite interactuar con el componente y su template
// TestBed nos permite configurar y crear un módulo de pruebas para el componente
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importamos el componente que vamos a testear
import { UsuarioDetalleComponent } from './usuario-detalle.component';

// Definimos un bloque de pruebas para el componente UsuarioDetalleComponent
// describe agrupa tests relacionados, en este caso, todos los tests de UsuarioDetalleComponent
describe('UsuarioDetalleComponent', () => {

  // Declaramos variables que serán utilizadas en las pruebas
  // component guardará la instancia del componente que vamos a testear
  let component: UsuarioDetalleComponent;

  // fixture nos permitirá interactuar con el componente y su template HTML
  let fixture: ComponentFixture<UsuarioDetalleComponent>;

  // beforeEach se ejecuta antes de cada test dentro del bloque describe
  // Aquí se prepara todo lo necesario para que cada test empiece desde un estado limpio
  beforeEach(async () => {
    // Configuramos un módulo de pruebas para nuestro componente usando TestBed
    // En este caso, como UsuarioDetalleComponent es standalone, se importa directamente
    await TestBed.configureTestingModule({
      imports: [UsuarioDetalleComponent]
    })
      // compileComponents prepara el componente y sus templates para ser usados en tests
      .compileComponents();

    // Creamos una instancia del componente para probarlo
    fixture = TestBed.createComponent(UsuarioDetalleComponent);

    // Obtenemos la instancia real del componente desde el fixture
    component = fixture.componentInstance;

    // Esperamos a que todas las tareas asíncronas relacionadas con el componente se completen
    await fixture.whenStable();
  });

  // Definimos un test
  // it describe un caso específico que queremos probar
  it('should create', () => {
    // Verificamos que el componente se haya creado correctamente
    // toBeTruthy() asegura que component no sea null o undefined y exista realmente
    expect(component).toBeTruthy();
  });
});
