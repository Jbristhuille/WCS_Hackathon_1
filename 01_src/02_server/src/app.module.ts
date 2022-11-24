import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DestinationsModule } from './modules/destinations/destinations.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Destinations } from './modules/destinations/destinations.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'travel',
      entities: [Destinations],
      synchronize: true,
    }),
    DestinationsModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
