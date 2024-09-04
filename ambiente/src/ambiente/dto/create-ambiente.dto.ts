import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, IsString } from "class-validator";

export class CreateAmbienteDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    ambiente_descricao: string;

    @ApiProperty()
    @IsInt()
    ambiente_andar: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    ambiente_tipo: string;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    ambiente_numero_pcs: number;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    ambiente_capacidade: number;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    ambiente_status: number;
    
}
