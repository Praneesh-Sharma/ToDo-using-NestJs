import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator"

export class LoginDto{
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    @Length(2,20)
    password: string
}