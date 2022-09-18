import {Controller, Get} from '@nestjs/common';

import {AppService} from './app.service';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {DriverEntity, OperatorEntity, SheeperEntity} from '@towpal-pro/database';

@Controller('draft-sti')
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectRepository(OperatorEntity)
    private operatorEntityRepository: Repository<OperatorEntity>,
    @InjectRepository(SheeperEntity)
    private shipperEntityRepository: Repository<SheeperEntity>,
    @InjectRepository(DriverEntity)
    private driverEntityRepository: Repository<DriverEntity>
  ) {
  }

  @Get()
  async getData() {
    const operator = await this.operatorEntityRepository.insert({
      email: 'operaasdftor@gmail.com',
      firstName: 'oper', lastName: 'ator', nikName: 'firasdfst', mobileNumber: '91df1',
    });
    const driver = await this.driverEntityRepository.insert({
      mobileNumber: '912',
      email: 'driasdve@gmail.com',
      firstName: 'dri',
      lastName: 'ver',
      okGoogle: 'ok google'
    });
    const shipper = await this.shipperEntityRepository.insert({
      email: 'shipasdfper@gmail.com',
      mobileNumber: '913',
      firstName: 'ship',
      lastName: 'per',
      helloWorld: 'hello world',
    });

    return {
      operator,
      driver,
      shipper,
    };
  }
}
