import { Module } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { DatabaseModule } from "@root/_database/database.module"
import { EnvModule } from "@root/_env/env.module"
import { UsersController } from "@root/users/users.controller"
import { UsersService } from "@root/users/users.service"
import { AuthService } from '@root/auth/auth.service';

@Module({
	imports: [
		EnvModule,
		DatabaseModule,
	],
	controllers: [UsersController],
	providers: [UsersService,AuthService, JwtService],
	exports: [UsersService]
})
export class UsersModule {}
