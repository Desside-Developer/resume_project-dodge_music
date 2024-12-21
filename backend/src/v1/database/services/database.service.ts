import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere } from 'typeorm';
import { User } from '../entities/user.entity';
import { RegisterUserDto } from '../../auth/dto/auth.dto';

@Injectable()
export class DatabaseService {
    constructor(
        @InjectRepository(User)
        private repository: Repository<User>,
    ) {}


    async createUser(user: RegisterUserDto): Promise<User> {
        const newUser = this.repository.create(user);
        return await this.repository.save(newUser);
    }

    async getUser(id: number): Promise<User> {
        return await this.repository.findOne({where: {id}});
    }

    async getUsers(count: number, id?: number, name?: string, email?: string): Promise<User[]> {
        const where: FindOptionsWhere<User> = {}; if (id !== undefined) where.id = id;
        if (name !== undefined) where.name = name; if (email !== undefined) where.email = email;
        return await this.repository.find({ where, take: count });
    }

    async checkUserByData(user: RegisterUserDto): Promise<boolean> {
        if (await this.getUserByEmail(user.email) === true) {
            if (await this.getUserByUsername(user.name) === true) {
                return;
            } throw new HttpException('Username already exists', 400);
        } throw new HttpException('Email already exists', 400);
    }

    async getUserByEmail(email: string): Promise<boolean> {
        const checkEmail = await this.repository.findOne({ where: { email } });
        if (checkEmail && email === checkEmail.email) {
            return false;
        }
        return true;
    }

    async getUserByUsername(name: string): Promise<boolean> {
        const checkUsername = await this.repository.findOne({ where: { name } });
        if (checkUsername && name === checkUsername.name) {
            return false;
        }
        return true;
    }

    async findUserByUsername(name: string): Promise<User> {
        return await this.repository.findOne({ where: { name } });
    }
}