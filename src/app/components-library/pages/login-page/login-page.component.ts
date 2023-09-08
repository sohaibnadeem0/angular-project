import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  email: string = '';
  password: string = '';

  onSubmit() {
    if(this.email == "test@test.com" && this.password == "test") {
      this.router.navigate(['/dashboard']);
    }
    else{
      alert("Invalid email or password");
    }
  }
}
