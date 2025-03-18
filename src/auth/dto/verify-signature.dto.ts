import { OptionalProp, Prop } from "@root/_shared/utils/decorators"
import { Address } from "viem"

export class VerifySignaturePayload {
	@Prop()
	message: string

	@Prop()
	signature: string

	@Prop()
	publicKey: string
}

export class VerifySignatureHederaPayload {
	@Prop()
	message: string

	@Prop()
	signature: Address

	@Prop()
	address: Address
}
