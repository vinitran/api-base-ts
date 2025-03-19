import { Controller, Get } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { Auth } from "@root/_shared/utils/decorators"
import { Claims } from "@root/auth/auth.service"
import { User } from "@root/users/user.decorator"
import { UsersService } from "./users.service"
import { plainToInstance } from 'class-transformer';
import { UserResponse } from '@root/users/dto/user.dto';

@Controller("users")
@ApiTags("users")
export class UsersController {
	constructor(private userService: UsersService) {}

	@Get("me")
	@Auth()
	async me(@User() { id }: Claims) {
		const user = await this.userService.getMe(id)
		return plainToInstance(UserResponse, user, { excludeExtraneousValues: true });
	}
}
