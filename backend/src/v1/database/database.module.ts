import { Module, OnModuleInit } from '@nestjs/common';
import { DatabaseService } from './services/database.service';
import { TypeOrmModule } from '@nestjs/typeorm';    
import { User } from './entities/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [DatabaseService],
    exports: [DatabaseService],
})
export class DatabaseModule implements OnModuleInit {
    onModuleInit() {
        console.log('DatabaseModule has been initialized.');
    }
}