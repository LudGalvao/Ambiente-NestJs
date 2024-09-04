import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpException, HttpStatus } from '@nestjs/common';
import { AmbienteService } from './ambiente.service';
import { CreateAmbienteDto } from './dto/create-ambiente.dto';
import { UpdateAmbienteDto } from './dto/update-ambiente.dto';
import { LudException } from './ludException';

@Controller('ambiente')
export class AmbienteController {
  constructor(private readonly ambienteService: AmbienteService) {}
  @Post()
  create(@Body() createAmbienteDto: CreateAmbienteDto) {
    return this.ambienteService.create(createAmbienteDto);
  }

  @Get()
  findAll() {
    return this.ambienteService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      const ambiente = await this.ambienteService.findOne(id); 
        console.log("retorno do findOne:",ambiente)
        if(!ambiente){
          throw new LudException();
        }
        return ambiente;      
    } catch (error) {
      if (error instanceof LudException) {
        throw error;
      }
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'Problema no servidor.',
      }, HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: error
      });
    } 
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateAmbienteDto: UpdateAmbienteDto) {
    try {      
      return this.ambienteService.update(id, updateAmbienteDto);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Ambiente não encontrado.',
      }, HttpStatus.NOT_FOUND, {
        cause: error
      });
    }
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.ambienteService.remove(id);      
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Ambiente não encontrado.',
      }, HttpStatus.NOT_FOUND, {
        cause: error
      });
    }
  }
}
