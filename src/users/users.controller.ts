import { Controller, Get } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { Auth } from "@root/_shared/utils/decorators"
import { Claims } from "@root/auth/auth.service"
import { User } from "@root/users/user.decorator"
import { UsersService } from "./users.service"

@Controller("users")
@ApiTags("users")
export class UsersController {
	constructor(private userService: UsersService) {}

	@Get("me")
	@Auth()
	async me(@User() { id }: Claims) {
		const user = await this.userService.getMe(id)
		return {
			id: user.id,
			address: user.address,
			updated_at: user.updated_at,
			created_at: user.created_at
		}
	}
}
