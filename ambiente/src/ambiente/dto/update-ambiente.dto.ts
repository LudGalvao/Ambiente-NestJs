import { PartialType } from '@nestjs/mapped-types';
import { CreateAmbienteDto } from './create-ambiente.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class UpdateAmbienteDto extends PartialType(CreateAmbienteDto) {    

    @ApiProperty()
    @IsString()
    @IsOptional()
    ambiente_descricao: string;
}
