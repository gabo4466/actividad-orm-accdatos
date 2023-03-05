import { IsIn, IsString, MinLength } from 'class-validator';

export class CreateBladeDto {
    @IsString()
    @MinLength(3)
    name: string;

    @IsString()
    @IsIn(['fire', 'water', 'earth', 'air', 'lightning', 'light', 'darkness'])
    element: string;
}
