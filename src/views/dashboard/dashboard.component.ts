import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskcontainerComponent } from '../../components/taskcontainer/taskcontainer.component';
import { QueryService } from '../../service/query.service';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [TaskcontainerComponent, FormsModule],
  templateUrl: './dashboard.component.html',
  providers: [QueryService, Router],
})
export class DashboardComponent {
  tasks = [];
  newTask = '';

  private URL = environment.URL;

  constructor(private queryService: QueryService, private router: Router) {}

  token = localStorage.getItem('accessToken');

  ngOnInit() {
    this.getUserTasks();
  }

  getUserTasks() {
    this.queryService
      .get(this.URL, {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Access-Control-Allow-Origin': '*',
          authorization: this.token,
        },
      })
      .subscribe({
        next: (response: any) => {
          this.tasks = response.tasks;
        },
        error: (error: any) => {
          console.log('error :>> ', error);
        },
      });
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

  logout() {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/']);
  }
}
