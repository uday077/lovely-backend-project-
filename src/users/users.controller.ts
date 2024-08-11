import { Controller, Get, Post, Put, Body, Param, Query, UseGuards, ValidationPipe, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateReferralRewardDto } from './dto/update-referral-reward.dto';
import { TelegramAuthGuard } from '../auth/telegram-auth.guard';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post('register')
	// @UseGuards(TelegramAuthGuard)
	async register(@Body(ValidationPipe) createUserDto: CreateUserDto): Promise<User> {
		console.log("register -----------> ",createUserDto);
		return this.usersService.create(createUserDto);
	}

	// @UseGuards(TelegramAuthGuard)
	@Get(':tg_id')
	async getUser(@Param('tg_id') tg_id: string): Promise<User> {
		console.log("getUser id -----------> ",tg_id); 
		return this.usersService.findOne(tg_id);
	}

	// @UseGuards(TelegramAuthGuard)
	@Put(':tg_id')
	async updateUser(
		@Param('tg_id') tg_id: string,
		@Body(ValidationPipe) updateUserDto: UpdateUserDto
	): Promise<User> {
		return this.usersService.update(tg_id, updateUserDto);
	}

	// @UseGuards(TelegramAuthGuard)
	@Get('ref/:tg_id')
	async getReferrals(
		@Param('tg_id') tg_id: string,
		@Query('page') page: number = 1,
		@Query('limit') limit: number = 10
	): Promise<any> {
		if (page < 1 || limit < 1) {
			throw new BadRequestException('Invalid page or limit value');
		}
		return this.usersService.getReferrals(tg_id, page, limit);
	}

	// @UseGuards(TelegramAuthGuard)
	@Put('updateReferalLeaugeReward/:tg_id')
	async updateReferralLeagueReward(
		@Param('tg_id') tg_id: string,
		@Body(ValidationPipe) updateReferralRewardDto: UpdateReferralRewardDto
	): Promise<User> {
		return this.usersService.updateReferralLeagueReward(tg_id, updateReferralRewardDto.referralLeagueReward);
	}
}