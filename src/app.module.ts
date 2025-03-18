import { Module } from '@nestjs/common';
import { AppController } from '@root/app.controller';
import { AppService } from '@root/app.service';
import { DatabaseModule } from '@root/_database/database.module';
import { EnvModule } from '@root/_env/env.module';
import { AuthModule } from '@root/auth/auth.module';
import { UsersModule } from '@root/users/users.module';
import { RedisModule } from '@nestjs-modules/ioredis';

@Module({
  imports: [
    DatabaseModule,
    EnvModule,
    AuthModule,
    UsersModule,
    RedisModule.forRoot({
      type: "single"
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
