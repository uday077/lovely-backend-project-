import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
	private readonly logger = new Logger(UsersService.name);

	constructor(@InjectModel(User.name) private userModel: Model<User>) {}

	async create(createUserDto: CreateUserDto): Promise<User> {
		this.logger.log(`Creating user with tg_id: ${createUserDto.tg_id}`);
		const createdUser = new this.userModel(createUserDto);
		return createdUser.save();
	}

	async findOne(tg_id: string): Promise<User> {
		this.logger.log(`Finding user with tg_id: ${tg_id}`);
		const user = await this.userModel.findOne({ tg_id }).exec();
		if (!user) {
			throw new NotFoundException(`User with tg_id ${tg_id} not found`);
		}
		return user;
	}

	async update(tg_id: string, updateUserDto: UpdateUserDto): Promise<User> {
		this.logger.log(`Updating user with tg_id: ${tg_id}`);
		const updatedUser = await this.userModel.findOneAndUpdate({ tg_id }, updateUserDto, { new: true }).exec();
		if (!updatedUser) {
			throw new NotFoundException(`User with tg_id ${tg_id} not found`);
		}
		return updatedUser;
	}

	async getReferrals(tg_id: string, page: number, limit: number): Promise<any> {
		this.logger.log(`Getting referrals for user with tg_id: ${tg_id}, page: ${page}, limit: ${limit}`);
		const skip = (page - 1) * limit;
		const referrals = await this.userModel.find({ referredBy: tg_id }).skip(skip).limit(limit).exec();
		const totalCount = await this.userModel.countDocuments({ referredBy: tg_id });
		return {
			referrals,
			totalPages: Math.ceil(totalCount / limit),
			currentPage: page,
			totalReferrals: totalCount,
		};
	}

	async updateReferralLeagueReward(tg_id: string, amount: number): Promise<User> {
		this.logger.log(`Updating referral league reward for user with tg_id: ${tg_id}, amount: ${amount}`);
		const updatedUser = await this.userModel.findOneAndUpdate(
			{ tg_id },
			{ $inc: { referralLeagueReward: amount } },
			{ new: true }
		).exec();
		if (!updatedUser) {
			throw new NotFoundException(`User with tg_id ${tg_id} not found`);
		}
		return updatedUser;
	}
}