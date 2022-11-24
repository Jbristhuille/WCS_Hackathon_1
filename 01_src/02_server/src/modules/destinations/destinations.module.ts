/**
 * @ Author: Jbristhuille
 * @ Create Time: 2022-11-24 11:20:28
 * @ Description: Destinations modules
 */

/* SUMMARY
  * Nest
  * Controllers
*/

/* Nest */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
/***/

/* Controllers */
import { DestinationsController } from './controllers/destinations.controller';
/***/

/* Entities */
import { Destinations } from './destinations.entity';
/***/

@Module({
  imports: [TypeOrmModule.forFeature([Destinations])],
  controllers: [DestinationsController]
})
export class DestinationsModule {}
