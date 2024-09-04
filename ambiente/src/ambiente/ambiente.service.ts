import { Injectable } from '@nestjs/common';
import { CreateAmbienteDto } from './dto/create-ambiente.dto';
import { UpdateAmbienteDto } from './dto/update-ambiente.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AmbienteService {

  constructor(private readonly prisma:PrismaService){}

  create(data: CreateAmbienteDto) {
    return this.prisma.ambiente.create({data});
  }

  findAll() {
    return this.prisma.ambiente.findMany({
      where:{
        ambiente_status:{
          gte:0
        }
      }
    });
  }

  findOne(id: number) {
    return this.prisma.ambiente.findUnique({
      where:{
        ambiente_id: id,
        ambiente_status:{
          gte:0
        }
      }
    });
  }

  update(id: number, data: UpdateAmbienteDto) {
    return this.prisma.ambiente.update({
      data,
      where:{
        ambiente_id:id
      }
    });
  }

  remove(id: number) {
    return this.prisma.ambiente.update({
      data:{
        ambiente_status:-1
      },
      where: {
        ambiente_id:id
      }
    });
  }
}
