import { Test, TestingModule } from '@nestjs/testing';
import { FiltroController } from './filtro.controller';

describe('FiltroController', () => {
  let controller: FiltroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FiltroController],
    }).compile();

    controller = module.get<FiltroController>(FiltroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
