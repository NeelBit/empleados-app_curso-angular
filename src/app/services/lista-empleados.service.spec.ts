import { TestBed } from '@angular/core/testing';

import { ListaEmpleadosService } from './lista-empleados.service';

describe('ListaEmpleadosService', () => {
  let service: ListaEmpleadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaEmpleadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
