import { ApiProperty } from "@nestjs/swagger";

export class RegisterAuthDto {
    @ApiProperty({ description: 'User name', type: String })
    user_name: string;
    
    @ApiProperty({ description: 'email', type: String})
    email: string;

    @ApiProperty({ description: 'password', type: String})
    pass_word: string
    
    @ApiProperty({ description: 'phone', type: String })
    phone_number: string;

    @ApiProperty({ description: 'birthday', type: String})
    birth_day: string;

    @ApiProperty({ description: 'gender', type: String})
    gender: string;
}

export class LoginAuthDto {
    @ApiProperty({ description: 'email', type: String})
    email: string

    @ApiProperty({ description: 'password', type: String})
    pass_word: string
}