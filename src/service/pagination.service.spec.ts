import { TestBed } from '@angular/core/testing';

import { PaginationService } from './pagination.service';

describe('PaginationService', () => {
  let service: PaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginationService);
  });

  it('EmitNextPage is executed correctly', () => {
    // write tests
  });
  it('EmitPreviousPage is executed correctly', () => {
    // write tests
  });
  it('EmitOffset is executed correctly', () => {
    // write tests
  });
  it('EmitTotalCount is executed correctly', () => {
    // write tests
  });
});
