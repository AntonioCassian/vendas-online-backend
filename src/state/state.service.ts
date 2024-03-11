import { Injectable } from '@nestjs/common';
import {  InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StateEntity } from './entityes/state.entity';

@Injectable()
export class StateService {
    getAllUser(): StateEntity[] | PromiseLike<StateEntity[]> {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectRepository(StateEntity)
        private readonly stateRepository: Repository<StateEntity>,
    ) {}

    async getAllState(): Promise<StateEntity> {
        return this.stateRepository.find();
    }
}
