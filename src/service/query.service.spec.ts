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
  const mockResponse = [
    { id: 1, content: 'task1', userID: 1 },
    { id: 2, content: 'task2', userID: 1 },
    { id: 3, content: 'task3', userID: 1 },
  ];

  const mockResponseAfterDelete = [
    { id: 1, content: 'task1', userID: 1 },
    { id: 2, content: 'task2', userID: 1 },
  ];

  const mockResponseAfterUpdate = [
    { id: 1, content: 'task1', userID: 1 },
    { id: 2, content: 'task2', userID: 1 },
    { id: 3, content: 'task4', userID: 1 },
  ];

  const body = { username: 'Pilex', password: '123' };

  const updateBody = { updatedTask: 'This is the updatedTask' };

  const header = {
    headers: {
      authorization: 'kakaksjdksjldjljlkjlu',
    },
  };
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

  it('it should perform a GET request like getAll tasks', async () => {
    const response$ = queryService.get(testUrl, header);
    const responsePromise = firstValueFrom(response$);
    const req = httpTesting.expectOne(testUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
    expect(await responsePromise).toEqual(mockResponse);
  });

  it('it should perform a POST request', async () => {
    const response$ = queryService.post(testUrl, body);
    const responsePromise = firstValueFrom(response$);
    const req = httpTesting.expectOne(testUrl);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
    expect(await responsePromise).toEqual(mockResponse);
  });

  it('it should perform a DELETE request', async () => {
    const response$ = queryService.delete(testUrl, header);
    const responsePromise = firstValueFrom(response$);
    const req = httpTesting.expectOne(testUrl);
    expect(req.request.method).toBe('DELETE');
    req.flush(mockResponseAfterDelete);
    expect(await responsePromise).toEqual(mockResponseAfterDelete);
  });

  it('it should perform a UPDATE request', async () => {
    const response$ = queryService.update(testUrl, updateBody, header);
    const responsePromise = firstValueFrom(response$);
    const req = httpTesting.expectOne(testUrl);
    expect(req.request.method).toBe('PUT');
    req.flush(mockResponseAfterUpdate);
    expect(await responsePromise).toEqual(mockResponseAfterUpdate);
  });
});
