import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1615556307580 implements MigrationInterface {   

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "redirect",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "url",
                        type: "varchar",
                        isNullable : true                         
                    },
                    {
                        name: "hash",
                        type: "varchar",                        
                    },
                    {
                        name: "created_at",
                        type: "timestamp",  
                        default: "now()"                      
                    },
                    {
                        name: "expire_at",
                        type: "timestamp",
                        isNullable : true                        
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("redirect")
    }

}