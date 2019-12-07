import { TestBed } from '@angular/core/testing';

import { DadosPessoasService } from './dados-pessoas.service';

describe('DadosPessoasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DadosPessoasService = TestBed.get(DadosPessoasService);
    expect(service).toBeTruthy();
  });
});
