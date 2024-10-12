import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { join } from 'path';

@Module({
  imports: [
    NotesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'tejeshp',
      password: 'root',
      database: 'todo',
      autoLoadEntities: true,
      entities: [join(__dirname, '**/*.entity{.ts,.js}')],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
