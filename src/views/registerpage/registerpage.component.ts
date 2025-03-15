import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { QueryService } from '../../service/query.service';

@Component({
  selector: 'app-registerpage',
  imports: [FormsModule],
  templateUrl: './registerpage.component.html',
  providers: [Router, QueryService],
})
export class RegisterpageComponent {
  username = '';
  password = '';
  email = '';
  fullname = '';

  constructor(private queryService: QueryService, private router: Router) {}

  register() {
    this.queryService
      .post('http://localhost:5000/users/register', {
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
