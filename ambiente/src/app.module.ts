import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AmbienteController } from './ambiente/ambiente.controller';
import { AmbienteService } from './ambiente/ambiente.service';
import { AmbienteModule } from './ambiente/ambiente.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [AmbienteModule],
  controllers: [AppController, AmbienteController],
  providers: [AppService, AmbienteService, PrismaService],
})
export class AppModule {}
