import { Controller, Get } from '@nestjs/common';
import { StateService } from './state.service';
import { StateEntity } from './entityes/state.entity';

@Controller('state')
export class StateController {
    constructor(private readonly stateService: StateService) {}
    @Get()
    async getAllUser(): Promise<StateEntity []> {
      return this.stateService.getAllUser();
    }
}
