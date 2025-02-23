import { TestBed } from '@angular/core/testing';

import { MatricesServices } from './matrices-services.service';

describe('MatricesServicesService', () => {
  let service: MatricesServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatricesServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
