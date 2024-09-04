import { HttpException, HttpStatus } from "@nestjs/common";

export class LudException extends HttpException {
    constructor() {
      super({
        status: HttpStatus.NOT_FOUND,
        error: 'Ambiente não encontrado.',
      }, HttpStatus.NOT_FOUND);
    }
  }