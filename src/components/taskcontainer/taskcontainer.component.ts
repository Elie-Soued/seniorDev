import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { FormsModule } from '@angular/forms';
import { QueryService } from '../../service/query.service';
import { environment } from '../../environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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

  updateTask(tasks: any) {
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
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            authorization: this.token,
          },
        }
      )
      .subscribe({
        next: (response: any) => {
          this.tasks = response.tasks;
        },
        error: (error: any) => {
          console.log('error :>> ', error);
        },
      });

    this.newTask = '';
  }
}
