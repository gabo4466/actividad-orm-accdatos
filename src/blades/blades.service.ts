import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBladeDto } from './dto/create-blade.dto';
import { UpdateBladeDto } from './dto/update-blade.dto';
import { Blade } from './entities/blade.entity';

@Injectable()
export class BladesService {
    constructor(
        @InjectRepository(Blade)
        private bladesRepository: Repository<Blade>,
    ) {}

    async create(createBladeDto: CreateBladeDto): Promise<Blade> {
        try {
            const blade = new Blade();
            blade.name = createBladeDto.name;
            blade.element = createBladeDto.element;

            return await this.bladesRepository.save(blade);
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }

    async findAll(): Promise<Blade[]> {
        try {
            return await this.bladesRepository.find();
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }

    async findOneById(id: string): Promise<Blade> {
        try {
            return await this.bladesRepository.findOne({
                where: {
                    id,
                },
            });
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }

    async update(id: string, updateBladeDto: UpdateBladeDto): Promise<Blade> {
        try {
            return await this.bladesRepository.save({
                id,
                ...updateBladeDto,
            });
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }

    async remove(id: number) {
        try {
            return await this.bladesRepository.delete(id);
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}
