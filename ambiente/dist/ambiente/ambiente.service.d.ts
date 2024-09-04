import { CreateAmbienteDto } from './dto/create-ambiente.dto';
import { UpdateAmbienteDto } from './dto/update-ambiente.dto';
import { PrismaService } from 'src/prisma.service';
export declare class AmbienteService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateAmbienteDto): any;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, data: UpdateAmbienteDto): any;
    remove(id: number): any;
}
