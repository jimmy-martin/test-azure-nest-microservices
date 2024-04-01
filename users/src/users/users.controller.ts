import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @EventPattern('user_created')
  create(@Payload() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @MessagePattern({ cmd: 'user_find' })
  find(@Payload() id: number) {
    return this.usersService.find(Number(id));
  }

  @MessagePattern({ cmd: 'user_find_all' })
  findAll() {
    return this.usersService.findAll();
  }
}
