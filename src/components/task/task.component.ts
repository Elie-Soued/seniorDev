import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { QueryService } from '../../service/query.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-task',
  imports: [FontAwesomeModule],
  templateUrl: './task.component.html',
})
export class TaskComponent {
  @Input() task!: { content: string; id: number; userID: number };
  @Output() removeTask = new EventEmitter();

  delete = faTrash;
  edit = faEdit;
  updatedTask = '';

  private URL = environment.URL;

  constructor(private queryService: QueryService) {}

  token = localStorage.getItem('accessToken');

  deleteTask() {
    this.queryService
      .delete(`${this.URL}/${this.task.id}`, {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Access-Control-Allow-Origin': '*',
          authorization: this.token,
        },
      })
      .subscribe({
        next: (response: any) => {
          console.log(response);
        },
        error: (error: any) => {
          console.log('error :>> ', error);
        },
      });
    this.removeTask.emit();
  }

  updateTask() {
    this.queryService
      .update(
        `${this.URL}/${this.task.id}`,

        {},

        {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            authorization: this.token,
          },
        }
      )
      .subscribe({
        next: (response: any) => {
          console.log(response);
        },
        error: (error: any) => {
          console.log('error :>> ', error);
        },
      });
    this.removeTask.emit();
  }
}
