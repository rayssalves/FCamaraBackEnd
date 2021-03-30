import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnStudents1617147268495 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('students',new TableColumn({
            name: 'contact',
            type: 'varchar'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('students', 'contact')
    }

}
