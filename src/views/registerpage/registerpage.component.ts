import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { QueryService } from '../../service/query.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-registerpage',
  imports: [FormsModule, FontAwesomeModule],
  templateUrl: './registerpage.component.html',
  providers: [Router, QueryService],
})
export class RegisterpageComponent {
  username = '';
  password = '';
  email = '';
  fullname = '';
  arrow = faArrowLeft;
  private URL_REGISTER = environment.URL_LOGIN;

  constructor(private queryService: QueryService, private router: Router) {}

  register() {
    this.queryService
      .post(this.URL_REGISTER, {
        username: this.username,
        password: this.password,
        email: this.email,
        fullname: this.fullname,
      })
      .subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['']);
        },
        error: (error) => {
          console.log('error :>> ', error);
        },
      });
  }
}
