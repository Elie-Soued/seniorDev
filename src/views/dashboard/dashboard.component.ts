import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskcontainerComponent } from '../../components/taskcontainer/taskcontainer.component';
import { QueryService } from '../../service/query.service';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { type task } from '../../types/type';

@Component({
  selector: 'app-dashboard',
  imports: [TaskcontainerComponent, FormsModule, FontAwesomeModule],
  templateUrl: './dashboard.component.html',
  providers: [QueryService, Router],
})
export class DashboardComponent {
  tasks: task[] = [];
  logoutIcon = faRightFromBracket;

  private URL = environment.URL;

  private queryService = inject(QueryService);

  constructor(private router: Router) {}

  token = localStorage.getItem('accessToken');

  ngOnInit() {
    this.queryService
      .get(this.URL, {
        headers: {
          authorization: this.token!,
        },
      })
      .subscribe({
        next: (tasks: task[] | []) => {
          this.tasks = tasks;
        },
        error: (error: unknown) => {
          console.log('error :>> ', error);
        },
      });
  }

  logout() {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/']);
  }
}
