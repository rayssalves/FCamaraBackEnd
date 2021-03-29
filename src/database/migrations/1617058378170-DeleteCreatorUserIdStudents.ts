import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class DeleteCreatorUserIdStudents1617058378170 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('students', 'creator_user_id')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('students',new TableColumn({
            name: 'creator_user_id',
            type: 'varchar'
        }))
    }

}
