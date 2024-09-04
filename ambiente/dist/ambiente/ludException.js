"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LudException = void 0;
const common_1 = require("@nestjs/common");
class LudException extends common_1.HttpException {
    constructor() {
        super({
            status: common_1.HttpStatus.NOT_FOUND,
            error: 'Ambiente não encontrado.',
        }, common_1.HttpStatus.NOT_FOUND);
    }
}
exports.LudException = LudException;
//# sourceMappingURL=ludException.js.map