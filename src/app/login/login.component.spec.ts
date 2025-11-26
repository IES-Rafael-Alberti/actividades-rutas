// Importamos herramientas necesarias para pruebas en Angular
// ComponentFixture permite interactuar con el componente y su template
// TestBed permite configurar un módulo de pruebas para crear y probar componentes
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importamos el componente que vamos a testear
import { LoginComponent } from './login.component';

// Definimos un bloque de pruebas para LoginComponent
// describe agrupa varios tests relacionados con este componente
describe('LoginComponent', () => {
  // Variable que almacenará la instancia del componente
  let component: LoginComponent;

  // Variable que permite interactuar con el componente y su template
  let fixture: ComponentFixture<LoginComponent>;

  // beforeEach se ejecuta antes de cada test en este bloque describe
  // Aquí configuramos todo lo necesario para iniciar los tests
  beforeEach(async () => {
    // Configuramos el módulo de pruebas para LoginComponent
    // Como el componente es standalone, se importa directamente en imports
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    })
      // compileComponents prepara el componente y su template para su uso en tests
      .compileComponents();

    // Creamos una instancia del componente a través del fixture
    fixture = TestBed.createComponent(LoginComponent);

    // Obtenemos la instancia real del componente desde el fixture
    component = fixture.componentInstance;

    // Esperamos a que todas las tareas asíncronas relacionadas con el componente se completen
    await fixture.whenStable();
  });

  // Definimos un test
  // it describe un caso específico que queremos probar
  it('should create', () => {
    // Verificamos que el componente se haya creado correctamente
    // toBeTruthy() asegura que component existe y no es null o undefined
    expect(component).toBeTruthy();
  });
});
