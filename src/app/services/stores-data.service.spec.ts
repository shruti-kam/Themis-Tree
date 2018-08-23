/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StoresDataService } from './stores-data.service';

describe('StoresDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoresDataService]
    });
  });

  it('should ...', inject([StoresDataService], (service: StoresDataService) => {
    expect(service).toBeTruthy();
  }));
});
