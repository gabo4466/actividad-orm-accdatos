import { PartialType } from '@nestjs/mapped-types';
import { Entity } from 'typeorm';
import { CreateBladeDto } from './create-blade.dto';

@Entity()
export class UpdateBladeDto extends PartialType(CreateBladeDto) {}
