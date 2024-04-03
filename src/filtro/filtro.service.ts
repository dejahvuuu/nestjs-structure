import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { Filtro } from './filtro.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


/*
3. Inject Model on Service
3.1 Define type Model<>
3.2 Execute with exec()
*/


@Injectable()
export class FiltroService {
    constructor(
        @InjectModel(Filtro.name) private filtroModel: Model<Filtro>,
    ) {}

    findAll() {
        return this.filtroModel.find().exec();
    }

    async findOne (id: string) {
        const filtro = await this.filtroModel.findOne({_id: id}).exec();
        if (!filtro) {
            throw new NotFoundException(`Filtro #${id} not found`);
        }
        return filtro;
    }

    async create(@Body() body): Promise<Filtro> {

        const userData = {
            name: body.name,
            password: body.password,
        }
        const newFiltro = new this.filtroModel(userData);
        return await newFiltro.save();
    }
}
