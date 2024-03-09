import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create.user.dto';
import { UserEntity } from './interface/user.entity';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor( 
        @InjectRepository(UserEntity)
        private readonly userReposytory: Repository<UserEntity>,
    ) {}
    private users: UserEntity[] = [];

    async createUser(createUserDto: CreateUserDto): Promise <UserEntity> {
        const saltOrRounds = 10;

        const passwordHashed = await hash(createUserDto.password, saltOrRounds)

        return this.userReposytory.save({
            ...createUserDto,
            password: passwordHashed
        })
    }

    async getAllUser(): Promise<UserEntity []> {
        return this.userReposytory.find();
    }
}
