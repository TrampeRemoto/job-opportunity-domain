/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */

export interface RawTokenPayload {
	sub: string;
	email_verified: boolean;
	profile: "CARD_MANAGER" | "CARD_USER" | "EXECUTOR" | "MASTER";
	iss: string;
	phone_number_verified: boolean;
	custom_companyId: string;
	cognito_username: string;
	custom_MFA_STATUS: "ACTIVE" | "INACTIVE";
	aud: string;
	event_id: string;
	token_use: string;
	auth_time: number;
	name: string;
	phone_number: string;
	exp: number;
	iat: number;
	accountId: number;
	email: string;
	token?: string;
}

export interface TokenPayload {
	userId: string;
	emailVerified: boolean;
	profile: "CARD_MANAGER" | "CARD_USER" | "EXECUTOR" | "MASTER";
	iss: string;
	phoneNumberVerified: boolean;
	customCompanyId: string;
	cognitoUsername: string;
	customMfaStatus: "ACTIVE" | "INACTIVE";
	aud: string;
	eventId: string;
	tokenUse: string;
	authTime: number;
	name: string;
	phoneNumber: string;
	exp: number;
	iat: number;
	accountId: number;
	email: string;
	token?: string;
}
