import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  email: string = '';
  password: string = '';

  onSubmit() {
    if(this.email != "" && this.password != "") {
      this.router.navigate(['/dashboard']);
    }
    else{
      alert("Invalid email or password");
    }
  }
}
