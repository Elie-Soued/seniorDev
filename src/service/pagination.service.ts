import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  private nextPageService = new Subject<void>();
  private previousPageService = new Subject<void>();
  private offsetService = new BehaviorSubject<number>(0);
  private totalCountService = new BehaviorSubject<number>(0);

  nextPage$ = this.nextPageService.asObservable();
  previousPage$ = this.previousPageService.asObservable();
  offset$ = this.offsetService.asObservable();
  totalCount$ = this.totalCountService.asObservable();

  constructor() {}

  emitNextPage() {
    this.nextPageService.next();
  }

  emitPreviousPage() {
    this.previousPageService.next();
  }

  emitOffset(value: number) {
    this.offsetService.next(value);
  }

  emitTotalCount(value: number) {
    this.totalCountService.next(value);
  }
}
