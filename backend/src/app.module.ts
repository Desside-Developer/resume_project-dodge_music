import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './v1/auth/auth.module';
import * as dotenv from 'dotenv';
import { DatabaseModule } from './v1/database/database.module';
import { MusicModule } from './v1/music/music.module';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'mysql',
      port: parseInt(process.env.DB_PORT, 10) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      retryAttempts: 5,
      retryDelay: 3000,
    }),
    AuthModule, DatabaseModule, MusicModule
  ],
  // controllers: [
  //   AuthController
  // ],
  // providers: [
  //   AuthService
  // ],
})
export class AppModule {}
