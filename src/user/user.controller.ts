import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create.user.dto';

@Controller('user')
export class UserController {
  @Post()
  async CreateUser(
    @Body() createUser: CreateUserDto
  ) {
    return {
      ...createUser,
      password: undefined
    }
  }
}


// dtos: são informações transferidas
//interface: são os dados do úsuario em si