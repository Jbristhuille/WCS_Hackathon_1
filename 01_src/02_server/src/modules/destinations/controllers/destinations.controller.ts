/**
 * @ Author: Jbristhuille
 * @ Create Time: 2022-11-24 11:22:13
 * @ Description: Destinations api endpoing controller
 */

/* SUMMARY
    * Nest
*/

/* Nest */
import { Controller, HttpException, HttpStatus, Param, Get } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
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

    /*
    * Name: getRandom
    * Description: Get random destination
    * 
    * Return (Object): Random item 
    */
    @Get('/random')
    async getRandom() {
        try {
            let all = await this.destRep.find();
            let index = Math.random() * (all.length-1 - 0) + 0;
            return all[Math.round(index)];
        } catch (err) {
            console.error(err);
            return new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    /***/

    /*
    * Name: getOne
    * Description: Get one destination by ID
    * 
    * Params:
    * - id (String): Destination ID
    * 
    * Return (Object): Destination infos
    */
    @Get('/:id')
    async getOne(@Param() params) {
        try {
            return await this.destRep.findOneBy({_id: new ObjectId(params.id)});
        } catch (err) {
            console.error(err);
            return new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    /***/
}
