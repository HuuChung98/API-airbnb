import { ApiProperty } from "@nestjs/swagger"; 

export class CreateUserDto {
    @ApiProperty({ description: "userId", type: Number})
    user_id: number;

    @ApiProperty({ description: "userName", type: String})
    user_name: string;

    @ApiProperty({ description: "email", type: String})
    email: string;

    @ApiProperty({ description: "password", type: String})
    pass_word: string;

    @ApiProperty({ description: "phonenumber", type: String})
    phone_number: string;

    @ApiProperty({ description: "birthday", type: String})
    birth_day: string;

    @ApiProperty({ description: "gender", type: String})
    gender: string;

    @ApiProperty({ description: "role", type: String})
    role: string;
};

export class FileUploadDto {
    @ApiProperty({ type: 'string', format: 'binary'})
    file: any
}
