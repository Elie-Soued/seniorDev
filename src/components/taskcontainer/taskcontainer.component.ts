import { Component, Input } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { TaskComponent } from '../task/task.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { PaginationService } from '../../service/pagination.service';
import { FormsModule } from '@angular/forms';
import { QueryService } from '../../service/query.service';
import { environment } from '../../environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {
  type addNewTaskPayload,
  type task,
  type taskResponse,
} from '../../types/type';

@Component({
  selector: 'app-taskcontainer',
  imports: [TaskComponent, PaginationComponent, FormsModule, FontAwesomeModule],
  templateUrl: './taskcontainer.component.html',
})
export class TaskcontainerComponent {
  newTask = '';
  add = faPlus;
  deleteAll = faTrashAlt;
  @Input() offset!: number;
  @Input() tasks!: task[];
  @Input() limit!: number;
  @Input() totalCount!: number;

  constructor(
    private queryService: QueryService,
    private paginationService: PaginationService
  ) {}

  token = localStorage.getItem('accessToken');

  private URL = environment.URL;

  updateTask(response: taskResponse): void {
    this.tasks = response.tasks;
    this.totalCount = response.meta.totalCount;
  }

  addTask(): void {
    const params = new HttpParams()
      .set('offset', this.offset.toString())
      .set('limit', this.limit.toString());

    this.queryService
      .post<taskResponse, addNewTaskPayload>(
        this.URL,

        {
          newTask: this.newTask,
        },

        {
          authorization: this.token!,
        },
        params
      )
      .subscribe({
        next: (response: taskResponse) => {
          this.tasks = response.tasks;
          this.totalCount = response.meta.totalCount;
          this.paginationService.emitTotalCount(this.totalCount);
        },
        error: (error: Error) => {
          console.log('error :>> ', error);
        },
      });

    this.newTask = '';
  }
}
