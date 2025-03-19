import { Body, Controller, Get, Post, Query } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { AuthService } from "./auth.service"
import { GetMessageParams } from "./dto/get-message.dto"
import { VerifySignaturePayload } from "./dto/verify-signature.dto"

@Controller("auth")
@ApiTags("auth")
export class AuthController {
	constructor(private authService: AuthService) {}

	@Get("message")
	async createMessage(@Query() { publicKey }: GetMessageParams) {
		return this.authService
			.generateMessage(publicKey)
			.then(message => ({ message }))
	}

	@Post("verify-signature")
	async verifySignature(
		@Body() verifySignatureRequest: VerifySignaturePayload
	) {
		return this.authService
			.verifySignature(verifySignatureRequest)
			.then(token => ({ token }))
	}
}
