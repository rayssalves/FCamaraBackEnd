import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateStudents1616957775998 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'students',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: 'create_user_id',
                        type: 'uuid'
                    },
                    {
                        name: 'nome',
                        type: 'varchar'
                    },
                    {
                        name: 'age',
                        type: 'integer'
                    },
                    {
                        name: 'address',
                        type: 'varchar'
                    },
                    {
                        name: 'material_list',
                        type: 'varchar'
                    },
                    {
                        name: 'creator_user_id',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp with time zone',
                        default: "'now()'"
                    }
                ]
            })
        );

        await queryRunner.createForeignKey('students', new TableForeignKey({
            name: 'CreateUserID',
            columnNames:  ['create_user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey( 'users', 'CreateUserID' )
        await queryRunner.dropTable('students');
    }

}
