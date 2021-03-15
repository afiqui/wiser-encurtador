import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid";
var randomstring = require("randomstring");

@Entity("redirect")
class Redirect {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    url: string;

    @Column()
    hash: string;

    @CreateDateColumn()
    created_at: Date;
    
    @Column()
    expire_at: Date

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
        if(!this.hash){
            this.hash = randomstring.generate(10)
        }
    }
    

}

export { Redirect };