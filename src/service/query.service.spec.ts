import { TestBed } from '@angular/core/testing';
import { QueryService } from './query.service';
import { provideHttpClient, withFetch } from '@angular/common/http';

describe('QueryService', () => {
  let service: QueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withFetch())],
    });
    service = TestBed.inject(QueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
