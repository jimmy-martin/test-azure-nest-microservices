import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private usersCount = 0;

  getAnalytics() {
    this.usersCount++;
    console.log('User created');
    console.log('Total users:', this.usersCount);
  }
}
