import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

export class RegisterUserDto{
    @ApiProperty()
    @IsString()
    @Length(2,20)
    name: string
    
    @ApiProperty()
    @IsString()
    @Length(2,20)
    password: string

    @ApiProperty()
    @IsString()
    email: string
}