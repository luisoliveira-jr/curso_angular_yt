import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'luisoli'
  userData = {
    email: 'luis@email.com',
    role: 'regra'
  }
  title = 'teoria';
}
