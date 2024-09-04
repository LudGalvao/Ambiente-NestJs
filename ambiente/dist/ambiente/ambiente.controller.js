"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmbienteController = void 0;
const common_1 = require("@nestjs/common");
const ambiente_service_1 = require("./ambiente.service");
const create_ambiente_dto_1 = require("./dto/create-ambiente.dto");
const update_ambiente_dto_1 = require("./dto/update-ambiente.dto");
const ludException_1 = require("./ludException");
let AmbienteController = class AmbienteController {
    constructor(ambienteService) {
        this.ambienteService = ambienteService;
    }
    create(createAmbienteDto) {
        return this.ambienteService.create(createAmbienteDto);
    }
    findAll() {
        return this.ambienteService.findAll();
    }
    async findOne(id) {
        try {
            const ambiente = await this.ambienteService.findOne(id);
            console.log("retorno do findOne:", ambiente);
            if (!ambiente) {
                throw new ludException_1.LudException();
            }
            return ambiente;
        }
        catch (error) {
            if (error instanceof ludException_1.LudException) {
                throw error;
            }
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'Problema no servidor.',
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: error
            });
        }
    }
    update(id, updateAmbienteDto) {
        try {
            return this.ambienteService.update(id, updateAmbienteDto);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'Ambiente não encontrado.',
            }, common_1.HttpStatus.NOT_FOUND, {
                cause: error
            });
        }
    }
    remove(id) {
        try {
            return this.ambienteService.remove(id);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'Ambiente não encontrado.',
            }, common_1.HttpStatus.NOT_FOUND, {
                cause: error
            });
        }
    }
};
exports.AmbienteController = AmbienteController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ambiente_dto_1.CreateAmbienteDto]),
    __metadata("design:returntype", void 0)
], AmbienteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AmbienteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AmbienteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_ambiente_dto_1.UpdateAmbienteDto]),
    __metadata("design:returntype", void 0)
], AmbienteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AmbienteController.prototype, "remove", null);
exports.AmbienteController = AmbienteController = __decorate([
    (0, common_1.Controller)('ambiente'),
    __metadata("design:paramtypes", [ambiente_service_1.AmbienteService])
], AmbienteController);
//# sourceMappingURL=ambiente.controller.js.map