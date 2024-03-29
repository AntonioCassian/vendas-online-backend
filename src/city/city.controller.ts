import { Controller, Get, Param } from '@nestjs/common';
import { CityEntity } from './entityes/city.entity';

@Controller('city')
export class CityService {
  constructor(
   private readonly cityService: CityService
  ) {}

  @Get('/:stateId')
  async getAllCitiesByStateId(
    @Param('stateId') stateId: number,
  ): Promise<CityEntity[]> {
    return this.cityService.getAllCitiesByStateId(stateId);
  }
}