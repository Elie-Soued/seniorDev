import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QueryService } from '../../service/query.service';
import { environment } from '../../environments/environment';
import { FormsModule } from '@angular/forms';
import { type task } from '../../types/type';
import {
  faTrash,
  faEdit,
  faCheck,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task!: { content: string; id: number; userID: number };
  @Output() removeTask = new EventEmitter();
  @Output() editTask = new EventEmitter();

  delete = faTrash;
  edit = faEdit;
  check = faCheck;
  undo = faTimes;
  updatedTask = '';

  disabled = true;

  private URL = environment.URL;

  constructor(private queryService: QueryService) {}

  token = localStorage.getItem('accessToken');

  ngOnInit() {
    this.updatedTask = this.task.content;
  }

  deleteTask() {
    this.queryService
      .delete(`${this.URL}/${this.task.id}`, {
        headers: {
          authorization: this.token!,
        },
      })
      .subscribe({
        next: (tasks: task[]) => {
          this.removeTask.emit(tasks);
        },
        error: (error: unknown) => {
          console.error(error);
        },
      });
  }

  enableTask() {
    this.disabled = false;
  }

  disableTask() {
    this.disabled = true;
  }

  updateTask() {
    this.queryService
      .update(
        `${this.URL}/${this.task.id}`,

        {
          updatedTask: this.updatedTask,
        },

        {
          headers: {
            authorization: this.token!,
          },
        }
      )
      .subscribe({
        next: (tasks: task[]) => {
          this.editTask.emit(tasks);
        },
        error: (error: unknown) => {
          console.log('error :>> ', error);
        },
      });

    this.disabled = true;
  }
}
