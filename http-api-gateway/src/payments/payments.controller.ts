import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { CreatePaymentDto } from './dto/CreatePaymentDto.dto';

@Controller('payments')
export class PaymentsController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

  @Post()
  createPayment(@Body() data: CreatePaymentDto) {
    this.natsClient.emit('createPayment', data);
  }
}
