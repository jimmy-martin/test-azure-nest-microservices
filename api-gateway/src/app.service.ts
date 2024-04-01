import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('USERS') private readonly usersClient: ClientProxy) {}
  createuser(createUserDto: CreateUserDto) {
    this.usersClient.emit('user_created', createUserDto);
  }

  getUsers() {
    return this.usersClient.send({ cmd: 'user_find_all' }, '');
  }

  getUser(id: number) {
    return this.usersClient.send({ cmd: 'user_find' }, id);
  }
}
