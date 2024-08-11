import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as crypto from 'crypto';

@Injectable()
export class TelegramAuthGuard implements CanActivate {
	canActivate(
		context: ExecutionContext,
	): boolean | Promise<boolean> | Observable<boolean> {
		const request = context.switchToHttp().getRequest();
		const authData = this.extractAuthData(request);

		if (!authData) {
			throw new UnauthorizedException('Missing Telegram authentication data');
		}

		if (!this.validateTelegramAuth(authData)) {
			throw new UnauthorizedException('Invalid Telegram authentication data');
		}

		// Attach the verified user data to the request
		request['user'] = {
			id: authData.id,
			first_name: authData.first_name,
			username: authData.username,
		};

		return true;
	}

	private extractAuthData(request: any): any {
		// Extract Telegram auth data from request headers or query parameters
		// Adjust this based on how you're sending the data from the client
		return request.headers['x-telegram-auth'] ? JSON.parse(request.headers['x-telegram-auth']) : null;
	}

	private validateTelegramAuth(authData: any): boolean {
		const botToken = process.env.BOT_TOKEN;
		if (!botToken) {
			throw new Error('BOT_TOKEN is not set in environment variables');
		}

		// Check if the auth data is expired
		const currentTimestamp = Math.floor(Date.now() / 1000);
		if (currentTimestamp - authData.auth_date > 86400) {
			return false;
		}

		// Validate the hash
		const secretKey = crypto.createHash('sha256').update(botToken).digest();
		const dataCheckString = Object.keys(authData)
			.filter(key => key !== 'hash')
			.sort()
			.map(key => `${key}=${authData[key]}`)
			.join('\n');

		const hash = crypto.createHmac('sha256', secretKey)
			.update(dataCheckString)
			.digest('hex');

		return hash === authData.hash;
	}
}