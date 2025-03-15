import { Component } from '@angular/core';
import { QueryService } from '../../service/query.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-landingpage',
  imports: [FormsModule],
  templateUrl: './landingpage.component.html',
  providers: [QueryService, Router],
})
export class LandingpageComponent {
  username = '';
  password = '';
  private URL_LOGIN = environment.URL_LOGIN;

  constructor(private queryService: QueryService, private router: Router) {}

  login() {
    this.queryService
      .post(this.URL_LOGIN, {
        username: this.username,
        password: this.password,
      })
      .subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.log('error :>> ', error);
        },
      });
  }
}
