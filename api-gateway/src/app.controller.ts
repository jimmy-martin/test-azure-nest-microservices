import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  createUser(
    @Query('email') email: string,
    @Query('password') password: string,
  ) {
    const createUserDto: CreateUserDto = { email, password };
    this.appService.createuser(createUserDto);
  }

  @Get('users')
  getUsers() {
    return this.appService.getUsers();
  }

  @Get('users/:id')
  getUser(@Param('id') id: number) {
    return this.appService.getUser(id);
  }
}
