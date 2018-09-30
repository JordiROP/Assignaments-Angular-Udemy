import { Component, OnInit } from '@angular/core';
import { ManageUsersService } from '../services/manage-users.service'
@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private manageUsersService: ManageUsersService) {}

  ngOnInit(): void {
    this.users = this.manageUsersService.getActiveUsers();
  }

  onSetToInactive(id: number) {
    this.manageUsersService.removeActiveUsers(id);
  }
}
