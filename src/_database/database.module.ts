import { Global, Module } from "@nestjs/common"
import { PrismaService } from "./prisma.service"
import {UserRepository} from '@root/_database/repositories/user.repository';

const repositories = [
	UserRepository,
]

@Global()
@Module({
	providers: [PrismaService, ...repositories],
	exports: repositories
})
export class DatabaseModule {}
