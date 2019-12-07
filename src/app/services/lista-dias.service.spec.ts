import { TestBed } from '@angular/core/testing';

import { ListaDiasService } from './lista-dias.service';

describe('ListaDiasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaDiasService = TestBed.get(ListaDiasService);
    expect(service).toBeTruthy();
  });
});
