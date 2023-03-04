import { Injectable } from '@nestjs/common';
import { CreateBladeDto } from './dto/create-blade.dto';
import { UpdateBladeDto } from './dto/update-blade.dto';

@Injectable()
export class BladesService {
  create(createBladeDto: CreateBladeDto) {
    return 'This action adds a new blade';
  }

  findAll() {
    return `This action returns all blades`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blade`;
  }

  update(id: number, updateBladeDto: UpdateBladeDto) {
    return `This action updates a #${id} blade`;
  }

  remove(id: number) {
    return `This action removes a #${id} blade`;
  }
}
