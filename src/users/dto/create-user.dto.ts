import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
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
    project: string[];
}