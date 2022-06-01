import { ApiProperty } from '@nestjs/swagger'

export class User {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    avatar?: string;

    @ApiProperty()
    is_admin?: boolean;

    @ApiProperty()
    created_at: Date;

    @ApiProperty()
    updated_at: Date;

    @ApiProperty()
    project: string[];
}