import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEmpleadosHijoComponent } from './lista-empleados-hijo.component';

describe('ListaEmpleadosHijoComponent', () => {
  let component: ListaEmpleadosHijoComponent;
  let fixture: ComponentFixture<ListaEmpleadosHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEmpleadosHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEmpleadosHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
