import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FiltroController } from './filtro/filtro.controller';
import { FiltroService } from './filtro/filtro.service';

@Module({
  imports: [],
  controllers: [AppController, FiltroController],
  providers: [AppService, FiltroService],
})
export class AppModule {}
