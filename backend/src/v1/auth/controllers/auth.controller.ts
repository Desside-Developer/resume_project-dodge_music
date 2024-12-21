import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { User } from '../../database/entities/user.entity';
import { LoginUserDto, RegisterUserDto } from '../dto/auth.dto';

@Controller('/v1/auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}

    // Auth routes

    @Post('register')
    async register(@Body() registerUserDto: RegisterUserDto) {
        return await this.authService.register(registerUserDto);
    }

    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto) {
        return await this.authService.login(loginUserDto);
    }

    // Dashboard Auth routes
}