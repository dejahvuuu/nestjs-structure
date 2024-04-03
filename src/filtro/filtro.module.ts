import { Module } from '@nestjs/common';
import { FiltroController } from './filtro.controller';
import { FiltroService } from './filtro.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Filtro, FiltroSchema } from './filtro.entity';


/*
2. Call entity throught MongooseModule.forFeature
*/

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Filtro.name,
                schema: FiltroSchema,
            },
        ]),
    ],
    controllers: [FiltroController],
    providers: [FiltroService]
})
export class FiltroModule {}
