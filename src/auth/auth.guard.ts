import {
	CanActivate,
	ExecutionContext,
	Injectable,
	UnauthorizedException
} from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { Env, InjectEnv } from "@root/_env/env.module"
import { Request } from "express"

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private jwtService: JwtService,
		@InjectEnv() private env: Env
	) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest()
		const token = this.extractTokenFromHeader(request)

		if (!token) throw new UnauthorizedException()

		try {
			const payload = await this.jwtService.verify(token, {
				secret: this.env.JWT_SECRET
			})
			request.user = payload
		} catch (error) {
			throw new UnauthorizedException(JSON.stringify(error))
		}

		return true
	}

	private extractTokenFromHeader(request: Request): string | undefined {
		const [type, token] = request.headers.authorization?.split(" ") ?? []
		return type === "Bearer" ? token : undefined
	}
}
