import { AmbienteService } from './ambiente.service';
import { CreateAmbienteDto } from './dto/create-ambiente.dto';
import { UpdateAmbienteDto } from './dto/update-ambiente.dto';
export declare class AmbienteController {
    private readonly ambienteService;
    constructor(ambienteService: AmbienteService);
    create(createAmbienteDto: CreateAmbienteDto): any;
    findAll(): any;
    findOne(id: number): unknown;
    update(id: number, updateAmbienteDto: UpdateAmbienteDto): any;
    remove(id: number): any;
}
