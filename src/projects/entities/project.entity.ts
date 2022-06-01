import { ApiProperty } from "@nestjs/swagger";

export class Project {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    coordinators: string[];

    @ApiProperty()
    created_at: Date;

    @ApiProperty()
    updated_at: Date;

    @ApiProperty()
    students: string[];
}
