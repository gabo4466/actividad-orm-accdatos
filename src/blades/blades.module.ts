import { Module } from '@nestjs/common';
import { BladesService } from './blades.service';
import { BladesController } from './blades.controller';

@Module({
  controllers: [BladesController],
  providers: [BladesService]
})
export class BladesModule {}
