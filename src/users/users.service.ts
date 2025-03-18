import {
	BadRequestException,
	Injectable,
	InternalServerErrorException,
	NotAcceptableException,
	NotFoundException
} from "@nestjs/common"
import { Env, InjectEnv } from '@root/_env/env.module';
import {UserRepository} from '@root/_database/repositories/user.repository';

@Injectable()
export class UsersService {
	constructor(
		private userRepository: UserRepository,
		@InjectEnv() private env: Env
	) {}

	async getMe(id: string) {
		const user = await this.userRepository.findById(id)
		if (!user) throw new InternalServerErrorException("not found user")

		return user
	}
}
