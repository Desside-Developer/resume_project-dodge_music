// filepath: /c:/Users/HCU-2248-562/Documents/Closed Projects/resume_project-dodge_music/backend/src/v1/auth/services/auth.service.ts
import { HttpException, Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/services/database.service';
import { LoginUserDto, RegisterUserDto } from '../dto/auth.dto';
import * as bcrypt from 'bcryptjs';
const jwt = require('jsonwebtoken');

@Injectable()
export class AuthService {
  constructor(
    private readonly databaseService: DatabaseService
  ) {}

  async register(user: RegisterUserDto) {
    if (user.pass == user.confirmPass) {
      if (await this.databaseService.checkUserByData(user) == null) {
        user.pass = bcrypt.hashSync(user.pass, 12);
        return await this.databaseService.createUser(user);
      }
      throw new HttpException('User already exists', 400)
    }
    throw new HttpException('Passwords do not match', 400);
  }

  async login(user: LoginUserDto) {
    const existingUser = await this.databaseService.findUserByUsername(user.name);
    if (!existingUser) {
      throw new HttpException('Invalid credentials', 401);
    }

    const isPasswordValid = bcrypt.compareSync(user.pass, existingUser.pass);
    if (!isPasswordValid) {
      throw new HttpException('Invalid credentials', 401);
    }

    const token = this.generateJwtToken(existingUser);
    return { token };
  }

  private generateJwtToken(user: any) {
    const payload = { username: user.name, sub: user.id };
    return jwt.sign(payload, '93447fj348', { expiresIn: '1h' });
  }

  async validateUser(username: string, password: string){
    return null;
  }
}