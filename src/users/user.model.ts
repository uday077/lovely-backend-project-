import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class User extends Document {
	@Prop({ required: true, unique: true })
	tg_id: string;

	@Prop({ required: true })
	username: string;

	@Prop()
	firstName: string;

	@Prop()
	lastName: string;

	@Prop({ default: 0 })
	coinBalance: number;

	@Prop({ default: 'Bronze' })
	league: string;

	@Prop({ default: 100 })
	energy: number;

	@Prop({ default: 100 })
	maxEnergy: number;

	@Prop({ default: 1 })
	rechargeSpeed: number;

	@Prop({ default: 0.3 })
	multitap: number;

	@Prop({ default: 0 })
	tapingGuruUses: number;

	@Prop({ default: 0 })
	fullTankUses: number;

	@Prop({ type: Date, default: null })
	lastTapingGuruUpdate: Date | null;

	@Prop({ type: Date, default: null })
	lastFullTankUpdate: Date | null;

	@Prop({ type: Date, default: null })
	tapBotStartedAt: Date | null;

	@Prop({ default: false })
	tapBotActive: boolean;

	@Prop({ type: Date, default: Date.now })
	lastEnergyUpdate: Date;

	@Prop({ default: 0 })
	totalTaps: number;

	@Prop({ default: 0 })
	profitPerHour: number;

	@Prop({ default: '' })
	exchange: string;

	@Prop({ default: 1 })
	streak: number;

	@Prop({ type: [String], default: [] })
	referrals: string[];

	@Prop({ type: [Number], default: [] })
	referralReward: number[];

	@Prop({ default: null })
	referredBy: string | null;

	@Prop({ type: [Number], default: [20] })
	dailyReward: number[];

	@Prop({ type: [Number], default: [] })
	leaguesReward: number[];

	@Prop({ default: 0 })
	referralLeagueReward: number;

	@Prop({ default: 0 })
	referralLeagueClaim: number;

	@Prop({ type: Date, default: Date.now })
	createdAt: Date;

	@Prop({ type: Date, default: Date.now })
	updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);