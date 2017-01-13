/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConsultaCiutatsService } from './consulta-ciutats.service';

describe('Service: ConsultaCiutats', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultaCiutatsService]
    });
  });

  it('should ...', inject([ConsultaCiutatsService], (service: ConsultaCiutatsService) => {
    expect(service).toBeTruthy();
  }));
});
