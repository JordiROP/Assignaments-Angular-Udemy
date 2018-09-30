import { ActivityCounterService } from './activity-counter.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ManageUsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];


  constructor(private activityCounterService: ActivityCounterService) {}

  getActiveUsers() {
    return this.activeUsers;
  }

  getInactiveUsers() {
    return this.inactiveUsers;
  }

  removeActiveUsers(id: number){
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.activityCounterService.movements();

  }

  removeInactiveUsers(id: number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.activityCounterService.movements();
  }
}
