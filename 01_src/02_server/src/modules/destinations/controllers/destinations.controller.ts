/**
 * @ Author: Jbristhuille
 * @ Create Time: 2022-11-24 11:22:13
 * @ Description: Destinations api endpoing controller
 */

/* SUMMARY
    * Nest
*/

/* Nest */
import { Controller, HttpException, HttpStatus, Get } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
/***/

/* Entities */
import { Destinations } from '../destinations.entity';
/***/

@Controller('destinations')
export class DestinationsController {
    constructor(@InjectRepository(Destinations) private destRep: Repository<Destinations>) {
    }

    /*
    * Name: getAll
    * Description: Get all destination from API
    * 
    * Return (Array): List of destinations
    */
    @Get()
    async getAll() {
        try {
            return await this.destRep.find();
        } catch (err) {
            console.error(err);
            new HttpException("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    /***/
}
