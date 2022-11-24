/**
 * @ Author: Jbristhuille
 * @ Create Time: 2022-11-24 11:36:13
 * @ Description: Destinations collecition descriptor
 */

/* SUMARY
    * Nest
*/

/* Nest */
import { Entity, Column, PrimaryGeneratedColumn, ObjectID } from "typeorm";
/***/

@Entity()
export class Destinations {
    @PrimaryGeneratedColumn()
    _id: ObjectID;

    @Column()
    name: string;

    @Column()
    code: string;

    @Column()
    description: string;

    @Column()
    imgs: string[];

    @Column()
    country: string;

    @Column()
    coords: string;
}
