import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create.user.dto';
import { UserService } from './user.service';
import { UserEntity } from './interface/user.entity';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) { }
  @Post()
  async CreateUser(
    @Body() createUser: CreateUserDto
  ): Promise<UserEntity> {
    return this.userService.createUser(createUser)
  }

  @Get()
  async getAllUser(): Promise<UserEntity []> {
    return this.userService.getAllUser();
  }
}


// dtos: são informações transferidas
//interface: são os dados do úsuario em si