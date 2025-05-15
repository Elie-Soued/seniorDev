import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { QueryService } from '../../service/query.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../environments/environment';
import { registerPayload, type registerError } from '../../types/type';

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
  error = '';
  arrow = faArrowLeft;
  private URL_REGISTER = environment.URL_REGISTER;

  constructor(private queryService: QueryService, private router: Router) {}

  register(): void {
    this.queryService
      .post<void | registerError, registerPayload>(
        this.URL_REGISTER,

        {
          username: this.username,
          password: this.password,
          email: this.email,
          fullname: this.fullname,
        }
      )
      .subscribe({
        next: () => {
          this.router.navigate(['']);
        },
        error: (e: any) => {
          if (e.error) {
            this.error = e.error.message;
          }
        },
      });
  }
}
