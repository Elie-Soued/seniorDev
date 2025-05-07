import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { QueryService } from './query.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

describe('QueryService', () => {
  let queryService: QueryService;
  let httpTesting: HttpTestingController;
  const testUrl = '/api/data';
  const mockResponse = { message: 'Success!' };
  const body = { username: 'Pilex', password: '123' };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        QueryService,
        provideHttpClient(withFetch()),
        provideHttpClientTesting(),
      ],
    });

    queryService = TestBed.inject(QueryService);
    httpTesting = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpTesting.verify();
  });

  // it('it should perform a GET request', async () => {
  //   const response$ = queryService.get(testUrl);
  //   const responsePromise = firstValueFrom(response$);
  //   const req = httpTesting.expectOne(testUrl);
  //   expect(req.request.method).toBe('GET');
  //   req.flush(mockResponse);
  //   expect(await responsePromise).toEqual(mockResponse);
  // });

  it('it should perfor a POST request', async () => {
    const response$ = queryService.post(testUrl, body);
    const responsePromise = firstValueFrom(response$);
    const req = httpTesting.expectOne(testUrl);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
    expect(await responsePromise).toEqual(mockResponse);
  });
});
