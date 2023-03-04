import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BladesService } from './blades.service';
import { CreateBladeDto } from './dto/create-blade.dto';
import { UpdateBladeDto } from './dto/update-blade.dto';

@Controller('blades')
export class BladesController {
  constructor(private readonly bladesService: BladesService) {}

  @Post()
  create(@Body() createBladeDto: CreateBladeDto) {
    return this.bladesService.create(createBladeDto);
  }

  @Get()
  findAll() {
    return this.bladesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bladesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBladeDto: UpdateBladeDto) {
    return this.bladesService.update(+id, updateBladeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bladesService.remove(+id);
  }
}
