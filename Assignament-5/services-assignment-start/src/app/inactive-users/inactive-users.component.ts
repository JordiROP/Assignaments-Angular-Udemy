import { Component, OnInit } from '@angular/core';
import { ManageUsersService } from '../services/manage-users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];
  
  constructor(private manageUsersService: ManageUsersService) {}

  ngOnInit(): void {
    this.users = this.manageUsersService.getInactiveUsers();    
  }

  onSetToActive(id: number) {
    this.manageUsersService.removeInactiveUsers(id);
  }
}
