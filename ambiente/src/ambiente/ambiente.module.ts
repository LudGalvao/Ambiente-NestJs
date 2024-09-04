import { Module } from '@nestjs/common';
import { AmbienteService } from './ambiente.service';
import { AmbienteController } from './ambiente.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AmbienteController],
  providers: [AmbienteService, PrismaService],
})
export class AmbienteModule {}
