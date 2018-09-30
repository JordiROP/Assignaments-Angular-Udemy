import { Component } from '@angular/core';
import { ManageUsersService } from './services/manage-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ManageUsersService]
})
export class AppComponent {

  constructor() {}
}
