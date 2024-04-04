import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('USERS') private readonly usersClient: ClientProxy,
    @Inject('ANALYTICS') private readonly analyticsClient: ClientProxy,
  ) {}

  getHello() {
    return { message: 'Hello World!' };
  }

  createuser(createUserDto: CreateUserDto) {
    this.usersClient.emit('user_created', createUserDto);
    this.analyticsClient.emit('user_created', createUserDto);
  }

  getUsers() {
    return this.usersClient.send({ cmd: 'user_find_all' }, '');
  }

  getUser(id: number) {
    return this.usersClient.send({ cmd: 'user_find' }, id);
  }
}
