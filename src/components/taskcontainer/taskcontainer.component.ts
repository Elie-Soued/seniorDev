import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { FormsModule } from '@angular/forms';
import { QueryService } from '../../service/query.service';
import { environment } from '../../environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { type task } from '../../types/type';

@Component({
  selector: 'app-taskcontainer',
  imports: [TaskComponent, FormsModule, FontAwesomeModule],
  templateUrl: './taskcontainer.component.html',
})
export class TaskcontainerComponent {
  newTask = '';
  add = faPlus;
  @Input() tasks!: { content: string; id: number; userID: number }[];

  constructor(private queryService: QueryService) {}

  token = localStorage.getItem('accessToken');

  private URL = environment.URL;

  updateTask(tasks: task[]) {
    this.tasks = tasks;
  }

  addTask() {
    this.queryService
      .post(
        this.URL,

        {
          newTask: this.newTask,
        },
        {
          headers: {
            authorization: this.token!,
          },
        }
      )
      .subscribe({
        next: (tasks: task[]) => {
          this.tasks = tasks;
        },
        error: (error: unknown) => {
          console.log('error :>> ', error);
        },
      });

    this.newTask = '';
  }
}
