import { forwardRef, Module, OnModuleInit } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [forwardRef(() => DatabaseModule)],
    controllers: [
        AuthController
    ],
    providers: [
        AuthService
    ],
})
export class AuthModule implements OnModuleInit {
    onModuleInit() {
        console.log('AuthModule has been initialized.');
    }
}