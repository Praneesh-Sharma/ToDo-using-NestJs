import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('Register')
  @ApiOperation({description: 'To register new user with email.', summary:'Register a user with details.'})
  create(@Body() registerData: RegisterUserDto) {
    return this.authService.register(registerData);
  }

  @Get('Login')
  @ApiOperation({description: 'Login with email.', summary:'Endpoint to login with user email and password.'})
  login(@Body() loginData: LoginDto){
    return this.authService.login(loginData)
  }
}
