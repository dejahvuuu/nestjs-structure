import { Controller, Get, Post, Body } from '@nestjs/common';
import { FiltroService } from './filtro.service';


/*
4. Inject Service
*/

@Controller('filtro')
export class FiltroController {
    constructor(private readonly filtroService: FiltroService) {}

    @Get()
    getAll() {
      return this.filtroService.findAll();
    }

    @Post()
    createStudent(@Body() body) {
        return this.filtroService.create(body);
    }

}
