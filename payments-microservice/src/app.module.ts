import { Module } from '@nestjs/common';
import { NatsClientModule } from './nats-client/nats-client.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [NatsClientModule, PaymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
