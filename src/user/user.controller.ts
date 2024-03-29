import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/create.user.dto';
import { ReturnUserDto } from './dtos/returnUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async CreateUser(
    @Body() createUser: CreateUserDto
  ): Promise<UserEntity> {
    return this.userService.createUser(createUser)
  }

  @Get()
  async getAllUser(): Promise<ReturnUserDto []> {
    return (await this.userService.getAllUser()).map(
      (userEntity) => new ReturnUserDto(userEntity)
    );
  }

  @Roles()
  @Get('/:userId')
  async getUserById(@Param('userId') userId: number): Promise<ReturnUserDto> {
    return new ReturnUserDto(
      await this.userService.getUserByIdUsingRelations(userId),
    );
  }
}

// dtos: são informações transferidas
//interface: são os dados do úsuario em si