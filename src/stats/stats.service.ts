import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Stat } from './stat.model';

@Injectable()
export class StatsService {
	constructor(@InjectModel(Stat.name) private statModel: Model<Stat>) {}

	async getOverallStats(): Promise<Stat> {
		const stats = await this.statModel.findOne().sort({ createdAt: -1 }).exec();
		if (!stats) {
			throw new NotFoundException('Stats not found');
		}
		return stats;
	}

	async updateStats(updateData: Partial<Stat>): Promise<Stat> {
		const stats = await this.statModel.findOne().sort({ createdAt: -1 }).exec();
		if (!stats) {
			const newStats = new this.statModel(updateData);
			return newStats.save();
		}
		Object.assign(stats, updateData);
		stats.updatedAt = new Date();
		return stats.save();
	}

	async incrementTotalTaps(increment: number): Promise<void> {
		await this.statModel.updateOne(
			{},
			{ $inc: { totalTaps: increment } },
			{ sort: { createdAt: -1 }, upsert: true }
		);
	}

	async incrementDailyUsers(): Promise<void> {
		await this.statModel.updateOne(
			{},
			{ $inc: { dailyUsers: 1 } },
			{ sort: { createdAt: -1 }, upsert: true }
		);
	}

	async updateOnlineUsers(count: number): Promise<void> {
		await this.statModel.updateOne(
			{},
			{ $set: { onlineUsers: count } },
			{ sort: { createdAt: -1 }, upsert: true }
		);
	}
}