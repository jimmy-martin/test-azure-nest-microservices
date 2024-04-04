import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];
  private lastId: number = 0;

  create(createUserDto: CreateUserDto) {
    this.lastId++;
    this.users.push({ id: this.lastId, ...createUserDto });
  }

  find(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  findAll() {
    return this.users;
  }
}
