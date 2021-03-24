import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1616616899379 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users', 
                columns: [
                    {
                        name:'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name:"name",
                        type:"varchar",
                        isNullable: false
                    },
                    {
                        name:"email",
                        type:"varchar",
                        isUnique: true,
                        isNullable: false
                    },
                    {
                        name:"pass",
                        type:"varchar",
                        isNullable: false
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default: 'now()'
                    },
                    {
                        name:"update_at",
                        type:"timestamp",
                        default: 'now()'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
