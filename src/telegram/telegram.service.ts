import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Telegraf } from 'telegraf';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';
import { UpdateUserDto } from '../users/dto/update-user.dto';

@Injectable()
export class TelegramService implements OnModuleInit {
	private bot: Telegraf;
	private readonly logger = new Logger(TelegramService.name);

	constructor(
		private configService: ConfigService,
		private usersService: UsersService
	) {
		const token = this.configService.get<string>('BOT_TOKEN');
		if (!token) {
			throw new Error('BOT_TOKEN must be provided');
		}
		this.bot = new Telegraf(token);
	}

	onModuleInit() {
		this.initializeBot();
	}

	private initializeBot() {
		this.bot.command('start', this.handleStartCommand.bind(this));

		// Set up the webhook
		const webhookUrl = this.configService.get<string>('TG_WEBHOOK');
		if (webhookUrl) {
			this.bot.telegram.setWebhook(webhookUrl);
			this.logger.log(`Webhook set to ${webhookUrl}`);
		} else {
			this.logger.warn('TG_WEBHOOK not set, running in polling mode');
			this.bot.launch();
		}
	}

	private async handleStartCommand(ctx: any) {
		const { id, username, first_name, last_name } = ctx.from;
		const referralId = ctx.startPayload; // Get referral ID if present

		try {
			// Check if user already exists
			let user = await this.usersService.findOne(id.toString());

			if (!user) {
				// User doesn't exist, create a new one
				user = await this.usersService.create({
					tg_id: id.toString(),
					username: username || '',
					firstName: first_name,
					lastName: last_name,
					referredBy: referralId || null,
				});
				this.logger.log(`New user created: ${id}`);
			} else {
				this.logger.log(`Existing user: ${id}`);
				// Update user information if needed
				const updateData: UpdateUserDto = {};
				if (user.username !== username) updateData.username = username;
				if (user.firstName !== first_name) updateData.firstName = first_name;
				if (user.lastName !== last_name) updateData.lastName = last_name;

				if (Object.keys(updateData).length > 0) {
					user = await this.usersService.update(id.toString(), updateData);
					this.logger.log(`User information updated: ${id}`);
				}
			}

			const welcomeMessage = `Welcome to Lovely Legends! 🌟\n\nWhat can this bot do?\n\nTransform your journey from a humble Bronze Coin to the mighty Lord Coin of the top-tier 1 crypto exchange! 🚀`;

			await ctx.replyWithHTML(welcomeMessage, {
				reply_markup: {
					inline_keyboard: [
						[{ text: '👉 Start now!', web_app: { url: `${this.configService.get<string>('WEB_APP')}?tgid=${id}` } }],
						[{ text: 'Join community 🚀', url: 'https://t.me/lovelyinu_coin' }],
						[{ text: 'Follow on X ✅', url: 'https://twitter.com/Lovely_finance' }],
						[{ text: 'Subscribe YouTube', url: 'https://www.youtube.com/watch?v=-Hk5_wuljQY' }],
					],
				},
			});
		} catch (error) {
			this.logger.error(`Error handling start command: ${error.message}`);
			await ctx.reply('Sorry, there was an error processing your request. Please try again later.');
		}
	}

	async handleUpdate(update: any) {
		try {
			await this.bot.handleUpdate(update);
		} catch (error) {
			this.logger.error(`Error handling update: ${error.message}`);
		}
	}
}