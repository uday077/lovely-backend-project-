import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Setting } from './setting.model';

@Injectable()
export class SettingsService {
	constructor(@InjectModel(Setting.name) private settingModel: Model<Setting>) {}

	async getSettingInfo(): Promise<Setting> {
		const setting = await this.settingModel.findOne().exec();
		if (!setting) {
		  const createdUser = new this.settingModel({
			dailyFullEnergy: 6,
			dailyTurbo: 6,
			dailyReward: [20, 40, 100, 200, 400, 800, 1500, 3000, 5000, 10000],
			leaguesBalanceReq: [
			  0, 200, 1000, 10000, 40000, 80000, 400000, 2000000, 4000000, 40000000,
			  41000000,
			],
			leaguesReward: [
			  0, 250, 500, 1000, 1500, 3000, 5000, 10000, 20000, 50000, 100000,
			],
			leaguesName: [
			  'Bronze',
			  'Silver',
			  'Gold',
			  'Platinum',
			  'Diamond',
			  'Epic',
			  'Legendary',
			  'Master',
			  'Grandmaster',
			  'Lord',
			  'Creator',
			],
			referralReward: [
			  10000, 50000, 200000, 250000, 300000, 500000, 2000000, 2500000,
			  10000000, 10000000,
			],
			welcomeReward: 100,
			referralCount: [1, 3, 10, 25, 50, 100, 500, 1000, 10000, 100000],
			multiTapPrice: [
			  100, 500, 1000, 2500, 5000, 7500, 12500, 17500, 25000, 50000, 300000,
			],
			tapAmount: [0.3, 0.45, 0.6, 0.9, 1.2, 1.5, 1.8, 2.1, 2.4, 2.7, 3, 6],
			boostAmount: [
			  100, 150, 250, 350, 450, 550, 650, 750, 850, 950, 1050, 1150,
			],
			energyLimitPrice: [
			  100, 500, 1000, 2500, 5000, 7500, 12500, 17500, 25000, 50000, 100000,
			],
			rechargingSpeedPrice: [2000, 10000, 100000, 250000, 500000],
			tapBotPrice: 200000,
			socials: [
			  {
				_id: {
				  $oid: '665f099288b1e318310600f6',
				},
				tasks: [
				  {
					_id: {
					  $oid: '665f09b688b1e318310600f7',
					},
					reward: 200,
					name: 'Join Telegram',
					link: 'https://t.me/lovelyinu_channel',
					type: 'redirect',
				  },
				  {
					_id: {
					  $oid: '665f099288b1e318310600f8',
					},
					reward: 200,
					name: 'Join X',
					link: 'https://twitter.com/Lovely_finance',
					type: 'redirect',
				  },
				  {
					_id: {
					  $oid: '665f099288b1e318310600fb',
					},
					reward: 300,
					name: '⁠Subscribe Youtube',
					link: 'https://www.youtube.com/@Lovelyfinance',
					type: 'redirect',
				  },
				  {
					_id: {
					  $oid: '665f099288b1e318310600fa',
					},
					reward: 200,
					name: 'Follow Instagram',
					link: 'https://www.instagram.com/lovely_inu',
					type: 'redirect',
				  },
				  {
					_id: {
					  $oid: '665f099288b1e318310600f9',
					},
					reward: 200,
					name: 'Join Discord',
					link: 'https://discord.gg/37kxK5fSuW',
					type: 'redirect',
				  },
				  {
					_id: {
					  $oid: '665f099288b1e318310600fc',
					},
					reward: 200,
					name: 'Follow TikTok',
					link: 'https://www.tiktok.com/@lovely.finance',
					type: 'redirect',
				  },
				  {
					_id: {
					  $oid: '65f28d4d91c2c7ba30647e76',
					},
					reward: 200,
					name: '⁠Join Reddit',
					link: 'https://www.reddit.com/r/lovely_holders/s/zHYic9HLLw',
					type: 'redirect',
				  },
				  {
					_id: {
					  $oid: '665f099288b1e318310600fd',
					},
					reward: 1000,
					name: 'Lovely Song',
					link: 'https://www.youtube.com/watch?v=-Hk5_wuljQY',
					type: 'redirect',
				  },
				],
				name: 'Join Our Socials',
			  },
			],
			market: [
			  {
				_id: {
				  $oid: '666bcf12e5fb403dbdc23b5c',
				},
				name: 'AI Token',
				iconName: 'aiToken',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 8,
					perHourTotal: 8,
					price: 200,
				  },
				  {
					_id: 2,
					perHourAddOn: 10,
					perHourTotal: 18,
					price: 250,
				  },
				  {
					_id: 3,
					perHourAddOn: 13,
					perHourTotal: 31,
					price: 313,
				  },
				  {
					_id: 4,
					perHourAddOn: 16,
					perHourTotal: 47,
					price: 391,
				  },
				  {
					_id: 5,
					perHourAddOn: 20,
					perHourTotal: 67,
					price: 508,
				  },
				  {
					_id: 6,
					perHourAddOn: 25,
					perHourTotal: 92,
					price: 660,
				  },
				  {
					_id: 7,
					perHourAddOn: 33,
					perHourTotal: 125,
					price: 891,
				  },
				  {
					_id: 8,
					perHourAddOn: 43,
					perHourTotal: 168,
					price: 1203,
				  },
				  {
					_id: 9,
					perHourAddOn: 55,
					perHourTotal: 223,
					price: 1624,
				  },
				  {
					_id: 10,
					perHourAddOn: 78,
					perHourTotal: 301,
					price: 2274,
				  },
				],
			  },
			  {
				_id: {
				  $oid: '666bcf12e5fb403dbdc23b5d',
				},
				name: 'Staking',
				iconName: 'staking',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 5,
					perHourTotal: 5,
					price: 150,
				  },
				  {
					_id: 2,
					perHourAddOn: 6,
					perHourTotal: 11,
					price: 188,
				  },
				  {
					_id: 3,
					perHourAddOn: 8,
					perHourTotal: 19,
					price: 234,
				  },
				  {
					_id: 4,
					perHourAddOn: 10,
					perHourTotal: 29,
					price: 293,
				  },
				  {
					_id: 5,
					perHourAddOn: 12,
					perHourTotal: 41,
					price: 381,
				  },
				  {
					_id: 6,
					perHourAddOn: 16,
					perHourTotal: 57,
					price: 495,
				  },
				  {
					_id: 7,
					perHourAddOn: 20,
					perHourTotal: 77,
					price: 668,
				  },
				  {
					_id: 8,
					perHourAddOn: 27,
					perHourTotal: 104,
					price: 902,
				  },
				  {
					_id: 9,
					perHourAddOn: 35,
					perHourTotal: 139,
					price: 1218,
				  },
				  {
					_id: 10,
					perHourAddOn: 48,
					perHourTotal: 187,
					price: 1705,
				  },
				],
			  },
			  {
				_id: {
				  $oid: '666bcf12e5fb403dbdc23b61',
				},
				name: 'Gamefi Tokens',
				iconName: 'gamefiTokens',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 15,
					perHourTotal: 15,
					price: 350,
				  },
				  {
					_id: 2,
					perHourAddOn: 19,
					perHourTotal: 34,
					price: 438,
				  },
				  {
					_id: 3,
					perHourAddOn: 23,
					perHourTotal: 57,
					price: 547,
				  },
				  {
					_id: 4,
					perHourAddOn: 29,
					perHourTotal: 86,
					price: 684,
				  },
				  {
					_id: 5,
					perHourAddOn: 37,
					perHourTotal: 123,
					price: 889,
				  },
				  {
					_id: 6,
					perHourAddOn: 47,
					perHourTotal: 170,
					price: 1155,
				  },
				  {
					_id: 7,
					perHourAddOn: 61,
					perHourTotal: 231,
					price: 1560,
				  },
				  {
					_id: 8,
					perHourAddOn: 80,
					perHourTotal: 311,
					price: 2105,
				  },
				  {
					_id: 9,
					perHourAddOn: 104,
					perHourTotal: 415,
					price: 2842,
				  },
				  {
					_id: 10,
					perHourAddOn: 145,
					perHourTotal: 560,
					price: 3979,
				  },
				],
			  },
			  {
				_id: {
				  $oid: '666bcf12e5fb403dbdc23b62',
				},
				name: '2.0 Tokens',
				iconName: '2.0Tokens',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 12,
					perHourTotal: 12,
					price: 320,
				  },
				  {
					_id: 2,
					perHourAddOn: 15,
					perHourTotal: 27,
					price: 400,
				  },
				  {
					_id: 3,
					perHourAddOn: 19,
					perHourTotal: 46,
					price: 500,
				  },
				  {
					_id: 4,
					perHourAddOn: 23,
					perHourTotal: 69,
					price: 625,
				  },
				  {
					_id: 5,
					perHourAddOn: 30,
					perHourTotal: 99,
					price: 813,
				  },
				  {
					_id: 6,
					perHourAddOn: 38,
					perHourTotal: 137,
					price: 1056,
				  },
				  {
					_id: 7,
					perHourAddOn: 49,
					perHourTotal: 186,
					price: 1426,
				  },
				  {
					_id: 8,
					perHourAddOn: 64,
					perHourTotal: 250,
					price: 1925,
				  },
				  {
					_id: 9,
					perHourAddOn: 83,
					perHourTotal: 333,
					price: 2599,
				  },
				  {
					_id: 10,
					perHourAddOn: 116,
					perHourTotal: 449,
					price: 3638,
				  },
				],
			  },
			  {
				_id: {
				  $oid: '666bcf12e5fb403dbdc23b66',
				},
				name: 'Base Tokens',
				iconName: 'baseTokens',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 7,
					perHourTotal: 7,
					price: 170,
				  },
				  {
					_id: 2,
					perHourAddOn: 9,
					perHourTotal: 16,
					price: 213,
				  },
				  {
					_id: 3,
					perHourAddOn: 11,
					perHourTotal: 27,
					price: 266,
				  },
				  {
					_id: 4,
					perHourAddOn: 14,
					perHourTotal: 41,
					price: 332,
				  },
				  {
					_id: 5,
					perHourAddOn: 17,
					perHourTotal: 58,
					price: 432,
				  },
				  {
					_id: 6,
					perHourAddOn: 22,
					perHourTotal: 80,
					price: 561,
				  },
				  {
					_id: 7,
					perHourAddOn: 29,
					perHourTotal: 109,
					price: 758,
				  },
				  {
					_id: 8,
					perHourAddOn: 37,
					perHourTotal: 146,
					price: 1023,
				  },
				  {
					_id: 9,
					perHourAddOn: 48,
					perHourTotal: 194,
					price: 1381,
				  },
				  {
					_id: 10,
					perHourAddOn: 68,
					perHourTotal: 262,
					price: 1933,
				  },
				],
			  },
			  {
				_id: {
				  $oid: '666bcf12e5fb403dbdc23b67',
				},
				name: 'BEP20 Tokens',
				iconName: 'bep20Tokens',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 4,
					perHourTotal: 4,
					price: 110,
				  },
				  {
					_id: 2,
					perHourAddOn: 5,
					perHourTotal: 9,
					price: 138,
				  },
				  {
					_id: 3,
					perHourAddOn: 6,
					perHourTotal: 15,
					price: 172,
				  },
				  {
					_id: 4,
					perHourAddOn: 8,
					perHourTotal: 23,
					price: 215,
				  },
				  {
					_id: 5,
					perHourAddOn: 10,
					perHourTotal: 33,
					price: 279,
				  },
				  {
					_id: 6,
					perHourAddOn: 13,
					perHourTotal: 46,
					price: 363,
				  },
				  {
					_id: 7,
					perHourAddOn: 16,
					perHourTotal: 62,
					price: 490,
				  },
				  {
					_id: 8,
					perHourAddOn: 21,
					perHourTotal: 83,
					price: 662,
				  },
				  {
					_id: 9,
					perHourAddOn: 28,
					perHourTotal: 111,
					price: 893,
				  },
				  {
					_id: 10,
					perHourAddOn: 39,
					perHourTotal: 150,
					price: 1251,
				  },
				],
			  },
			  {
				_id: {
				  $oid: '666bcf12e5fb403dbdc23b6a',
				},
				name: 'ERC20 Tokens',
				iconName: 'erc20Tokens',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 15,
					perHourTotal: 15,
					price: 350,
				  },
				  {
					_id: 2,
					perHourAddOn: 19,
					perHourTotal: 34,
					price: 438,
				  },
				  {
					_id: 3,
					perHourAddOn: 23,
					perHourTotal: 57,
					price: 547,
				  },
				  {
					_id: 4,
					perHourAddOn: 29,
					perHourTotal: 86,
					price: 684,
				  },
				  {
					_id: 5,
					perHourAddOn: 37,
					perHourTotal: 123,
					price: 889,
				  },
				  {
					_id: 6,
					perHourAddOn: 47,
					perHourTotal: 170,
					price: 1155,
				  },
				  {
					_id: 7,
					perHourAddOn: 61,
					perHourTotal: 231,
					price: 1560,
				  },
				  {
					_id: 8,
					perHourAddOn: 80,
					perHourTotal: 311,
					price: 2105,
				  },
				  {
					_id: 9,
					perHourAddOn: 104,
					perHourTotal: 415,
					price: 2842,
				  },
				  {
					_id: 10,
					perHourAddOn: 145,
					perHourTotal: 560,
					price: 3979,
				  },
				],
			  },
			  {
				_id: {
				  $oid: '666bcf12e5fb403dbdc23b6b',
				},
				name: 'TRC20 Tokens',
				iconName: 'trc20Tokens',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 5,
					perHourTotal: 5,
					price: 135,
				  },
				  {
					_id: 2,
					perHourAddOn: 6,
					perHourTotal: 11,
					price: 169,
				  },
				  {
					_id: 3,
					perHourAddOn: 8,
					perHourTotal: 19,
					price: 211,
				  },
				  {
					_id: 4,
					perHourAddOn: 10,
					perHourTotal: 29,
					price: 264,
				  },
				  {
					_id: 5,
					perHourAddOn: 12,
					perHourTotal: 41,
					price: 343,
				  },
				  {
					_id: 6,
					perHourAddOn: 16,
					perHourTotal: 57,
					price: 446,
				  },
				  {
					_id: 7,
					perHourAddOn: 20,
					perHourTotal: 77,
					price: 602,
				  },
				  {
					_id: 8,
					perHourAddOn: 27,
					perHourTotal: 104,
					price: 812,
				  },
				  {
					_id: 9,
					perHourAddOn: 35,
					perHourTotal: 139,
					price: 1096,
				  },
				  {
					_id: 10,
					perHourAddOn: 48,
					perHourTotal: 187,
					price: 1535,
				  },
				],
			  },
			],
			web3Leaders: [
			  {
				_id: {
				  $oid: '666bed3a7a825f72cc77c149',
				},
				name: 'BitMart',
				iconName: 'bitMart',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 45,
					perHourTotal: 45,
					price: 1100,
				  },
				  {
					_id: 2,
					perHourAddOn: 56,
					perHourTotal: 101,
					price: 1375,
				  },
				  {
					_id: 3,
					perHourAddOn: 70,
					perHourTotal: 171,
					price: 1719,
				  },
				  {
					_id: 4,
					perHourAddOn: 88,
					perHourTotal: 259,
					price: 2148,
				  },
				  {
					_id: 5,
					perHourAddOn: 112,
					perHourTotal: 371,
					price: 2793,
				  },
				  {
					_id: 6,
					perHourAddOn: 142,
					perHourTotal: 513,
					price: 3631,
				  },
				  {
					_id: 7,
					perHourAddOn: 184,
					perHourTotal: 697,
					price: 4902,
				  },
				  {
					_id: 8,
					perHourAddOn: 240,
					perHourTotal: 937,
					price: 6617,
				  },
				  {
					_id: 9,
					perHourAddOn: 311,
					perHourTotal: 1248,
					price: 8933,
				  },
				  {
					_id: 10,
					perHourAddOn: 436,
					perHourTotal: 1684,
					price: 12507,
				  },
				],
			  },
			  {
				_id: {
				  $oid: '666bed3a7a825f72cc77c14c',
				},
				name: 'Tron Dao',
				iconName: 'tronDao',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 75,
					perHourTotal: 75,
					price: 1875,
				  },
				  {
					_id: 2,
					perHourAddOn: 94,
					perHourTotal: 169,
					price: 2344,
				  },
				  {
					_id: 3,
					perHourAddOn: 117,
					perHourTotal: 286,
					price: 2930,
				  },
				  {
					_id: 4,
					perHourAddOn: 146,
					perHourTotal: 432,
					price: 3662,
				  },
				  {
					_id: 5,
					perHourAddOn: 186,
					perHourTotal: 618,
					price: 4761,
				  },
				  {
					_id: 6,
					perHourAddOn: 236,
					perHourTotal: 854,
					price: 6189,
				  },
				  {
					_id: 7,
					perHourAddOn: 307,
					perHourTotal: 1161,
					price: 8355,
				  },
				  {
					_id: 8,
					perHourAddOn: 399,
					perHourTotal: 1560,
					price: 11279,
				  },
				  {
					_id: 9,
					perHourAddOn: 559,
					perHourTotal: 2119,
					price: 15791,
				  },
				  {
					_id: 10,
					perHourAddOn: 783,
					perHourTotal: 2902,
					price: 22108,
				  },
				],
			  },
			  {
				_id: {
				  $oid: '666bed3a7a825f72cc77c14f',
				},
				name: 'Lovely Swap',
				iconName: 'lovelySwap',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 69,
					perHourTotal: 69,
					price: 750,
				  },
				  {
					_id: 2,
					perHourAddOn: 86,
					perHourTotal: 155,
					price: 938,
				  },
				  {
					_id: 3,
					perHourAddOn: 108,
					perHourTotal: 263,
					price: 1172,
				  },
				  {
					_id: 4,
					perHourAddOn: 135,
					perHourTotal: 398,
					price: 1465,
				  },
				  {
					_id: 5,
					perHourAddOn: 171,
					perHourTotal: 569,
					price: 1904,
				  },
				  {
					_id: 6,
					perHourAddOn: 217,
					perHourTotal: 786,
					price: 2476,
				  },
				  {
					_id: 7,
					perHourAddOn: 283,
					perHourTotal: 1069,
					price: 3342,
				  },
				  {
					_id: 8,
					perHourAddOn: 367,
					perHourTotal: 1436,
					price: 4512,
				  },
				  {
					_id: 9,
					perHourAddOn: 514,
					perHourTotal: 1950,
					price: 6316,
				  },
				  {
					_id: 10,
					perHourAddOn: 720,
					perHourTotal: 2670,
					price: 8843,
				  },
				],
			  },
			  {
				_id: {
				  $oid: '666bed3a7a825f72cc77c152',
				},
				name: 'CoinStore',
				iconName: 'coinStore',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 33,
					perHourTotal: 33,
					price: 750,
				  },
				  {
					_id: 2,
					perHourAddOn: 41,
					perHourTotal: 74,
					price: 938,
				  },
				  {
					_id: 3,
					perHourAddOn: 52,
					perHourTotal: 126,
					price: 1172,
				  },
				  {
					_id: 4,
					perHourAddOn: 64,
					perHourTotal: 190,
					price: 1465,
				  },
				  {
					_id: 5,
					perHourAddOn: 82,
					perHourTotal: 272,
					price: 1904,
				  },
				  {
					_id: 6,
					perHourAddOn: 104,
					perHourTotal: 376,
					price: 2476,
				  },
				  {
					_id: 7,
					perHourAddOn: 135,
					perHourTotal: 511,
					price: 3342,
				  },
				  {
					_id: 8,
					perHourAddOn: 176,
					perHourTotal: 687,
					price: 4512,
				  },
				  {
					_id: 9,
					perHourAddOn: 228,
					perHourTotal: 915,
					price: 6091,
				  },
				  {
					_id: 10,
					perHourAddOn: 320,
					perHourTotal: 1235,
					price: 8527,
				  },
				],
			  },
			  {
				_id: {
				  $oid: '666bed3a7a825f72cc77c159',
				},
				name: 'Toobit',
				iconName: 'toobit',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 20,
					perHourTotal: 20,
					price: 425,
				  },
				  {
					_id: 2,
					perHourAddOn: 25,
					perHourTotal: 45,
					price: 531,
				  },
				  {
					_id: 3,
					perHourAddOn: 31,
					perHourTotal: 76,
					price: 664,
				  },
				  {
					_id: 4,
					perHourAddOn: 39,
					perHourTotal: 115,
					price: 830,
				  },
				  {
					_id: 5,
					perHourAddOn: 50,
					perHourTotal: 165,
					price: 1079,
				  },
				  {
					_id: 6,
					perHourAddOn: 63,
					perHourTotal: 228,
					price: 1403,
				  },
				  {
					_id: 7,
					perHourAddOn: 82,
					perHourTotal: 310,
					price: 1894,
				  },
				  {
					_id: 8,
					perHourAddOn: 106,
					perHourTotal: 416,
					price: 2557,
				  },
				  {
					_id: 9,
					perHourAddOn: 138,
					perHourTotal: 554,
					price: 3451,
				  },
				  {
					_id: 10,
					perHourAddOn: 194,
					perHourTotal: 748,
					price: 4832,
				  },
				],
			  },
			  {
				_id: {
				  $oid: '666bed3a7a825f72cc77c15a',
				},
				name: 'Lovely Wallet',
				iconName: 'lovelyWallet',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 50,
					perHourTotal: 50,
					price: 500,
				  },
				  {
					_id: 2,
					perHourAddOn: 63,
					perHourTotal: 113,
					price: 625,
				  },
				  {
					_id: 3,
					perHourAddOn: 78,
					perHourTotal: 191,
					price: 781,
				  },
				  {
					_id: 4,
					perHourAddOn: 98,
					perHourTotal: 289,
					price: 977,
				  },
				  {
					_id: 5,
					perHourAddOn: 124,
					perHourTotal: 413,
					price: 1270,
				  },
				  {
					_id: 6,
					perHourAddOn: 158,
					perHourTotal: 571,
					price: 1650,
				  },
				  {
					_id: 7,
					perHourAddOn: 205,
					perHourTotal: 776,
					price: 2228,
				  },
				  {
					_id: 8,
					perHourAddOn: 266,
					perHourTotal: 1042,
					price: 3008,
				  },
				  {
					_id: 9,
					perHourAddOn: 346,
					perHourTotal: 1388,
					price: 4061,
				  },
				  {
					_id: 10,
					perHourAddOn: 484,
					perHourTotal: 1872,
					price: 5685,
				  },
				],
			  },
			  {
				_id: {
				  $oid: '666bed3a7a825f72cc77c15e',
				},
				name: 'Gotbit',
				iconName: 'gotbit',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 54,
					perHourTotal: 54,
					price: 1000,
				  },
				  {
					_id: 2,
					perHourAddOn: 68,
					perHourTotal: 122,
					price: 1250,
				  },
				  {
					_id: 3,
					perHourAddOn: 84,
					perHourTotal: 206,
					price: 1688,
				  },
				  {
					_id: 4,
					perHourAddOn: 105,
					perHourTotal: 311,
					price: 2447,
				  },
				  {
					_id: 5,
					perHourAddOn: 134,
					perHourTotal: 445,
					price: 3548,
				  },
				  {
					_id: 6,
					perHourAddOn: 170,
					perHourTotal: 615,
					price: 5145,
				  },
				  {
					_id: 7,
					perHourAddOn: 221,
					perHourTotal: 836,
					price: 7460,
				  },
				  {
					_id: 8,
					perHourAddOn: 287,
					perHourTotal: 1123,
					price: 11189,
				  },
				  {
					_id: 9,
					perHourAddOn: 374,
					perHourTotal: 1497,
					price: 16784,
				  },
				  {
					_id: 10,
					perHourAddOn: 523,
					perHourTotal: 2020,
					price: 25176,
				  },
				],
			  },
			  {
				_id: {
				  $oid: '666bed3a7a825f72cc77c160',
				},
				name: 'Uniswap',
				iconName: 'uniswap',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 123,
					perHourTotal: 123,
					price: 2700,
				  },
				  {
					_id: 2,
					perHourAddOn: 154,
					perHourTotal: 277,
					price: 3375,
				  },
				  {
					_id: 3,
					perHourAddOn: 192,
					perHourTotal: 469,
					price: 4556,
				  },
				  {
					_id: 4,
					perHourAddOn: 240,
					perHourTotal: 709,
					price: 6607,
				  },
				  {
					_id: 5,
					perHourAddOn: 305,
					perHourTotal: 1014,
					price: 9580,
				  },
				  {
					_id: 6,
					perHourAddOn: 387,
					perHourTotal: 1401,
					price: 13890,
				  },
				  {
					_id: 7,
					perHourAddOn: 504,
					perHourTotal: 1905,
					price: 20141,
				  },
				  {
					_id: 8,
					perHourAddOn: 655,
					perHourTotal: 2560,
					price: 30211,
				  },
				  {
					_id: 9,
					perHourAddOn: 851,
					perHourTotal: 3411,
					price: 45317,
				  },
				  {
					_id: 10,
					perHourAddOn: 1192,
					perHourTotal: 4603,
					price: 67976,
				  },
				],
			  },
			  {
				_id: {
				  $oid: '666bed3a7a825f72cc77c163',
				},
				name: 'X',
				iconName: 'x',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 22,
					perHourTotal: 22,
					price: 450,
				  },
				  {
					_id: 2,
					perHourAddOn: 28,
					perHourTotal: 50,
					price: 563,
				  },
				  {
					_id: 3,
					perHourAddOn: 34,
					perHourTotal: 84,
					price: 703,
				  },
				  {
					_id: 4,
					perHourAddOn: 43,
					perHourTotal: 127,
					price: 879,
				  },
				  {
					_id: 5,
					perHourAddOn: 55,
					perHourTotal: 182,
					price: 1143,
				  },
				  {
					_id: 6,
					perHourAddOn: 69,
					perHourTotal: 251,
					price: 1485,
				  },
				  {
					_id: 7,
					perHourAddOn: 90,
					perHourTotal: 341,
					price: 2005,
				  },
				  {
					_id: 8,
					perHourAddOn: 117,
					perHourTotal: 458,
					price: 2707,
				  },
				  {
					_id: 9,
					perHourAddOn: 152,
					perHourTotal: 610,
					price: 3655,
				  },
				  {
					_id: 10,
					perHourAddOn: 213,
					perHourTotal: 823,
					price: 5116,
				  },
				],
			  },
			  {
				_id: {
				  $oid: '666bed3a7a825f72cc77c164',
				},
				name: 'Telegram',
				iconName: 'telegram',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 17,
					perHourTotal: 17,
					price: 370,
				  },
				  {
					_id: 2,
					perHourAddOn: 21,
					perHourTotal: 38,
					price: 463,
				  },
				  {
					_id: 3,
					perHourAddOn: 27,
					perHourTotal: 65,
					price: 578,
				  },
				  {
					_id: 4,
					perHourAddOn: 33,
					perHourTotal: 98,
					price: 723,
				  },
				  {
					_id: 5,
					perHourAddOn: 42,
					perHourTotal: 140,
					price: 939,
				  },
				  {
					_id: 6,
					perHourAddOn: 54,
					perHourTotal: 194,
					price: 1221,
				  },
				  {
					_id: 7,
					perHourAddOn: 70,
					perHourTotal: 264,
					price: 1649,
				  },
				  {
					_id: 8,
					perHourAddOn: 91,
					perHourTotal: 355,
					price: 2226,
				  },
				  {
					_id: 9,
					perHourAddOn: 118,
					perHourTotal: 473,
					price: 3005,
				  },
				  {
					_id: 10,
					perHourAddOn: 165,
					perHourTotal: 638,
					price: 4207,
				  },
				],
			  },
			],
			license: [
			  {
				_id: {
				  $oid: '666c014007e3d433a404b2c5',
				},
				name: 'Panama License',
				iconName: 'panamaLicense',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 20,
					perHourTotal: 20,
					price: 400,
				  },
				  {
					_id: 2,
					perHourAddOn: 25,
					perHourTotal: 45,
					price: 500,
				  },
				  {
					_id: 3,
					perHourAddOn: 31,
					perHourTotal: 76,
					price: 625,
				  },
				  {
					_id: 4,
					perHourAddOn: 39,
					perHourTotal: 115,
					price: 781,
				  },
				  {
					_id: 5,
					perHourAddOn: 50,
					perHourTotal: 165,
					price: 1016,
				  },
				  {
					_id: 6,
					perHourAddOn: 63,
					perHourTotal: 228,
					price: 1320,
				  },
				  {
					_id: 7,
					perHourAddOn: 82,
					perHourTotal: 310,
					price: 1782,
				  },
				  {
					_id: 8,
					perHourAddOn: 106,
					perHourTotal: 416,
					price: 2406,
				  },
				  {
					_id: 9,
					perHourAddOn: 138,
					perHourTotal: 554,
					price: 3248,
				  },
				  {
					_id: 10,
					perHourAddOn: 194,
					perHourTotal: 748,
					price: 4548,
				  },
				],
			  },
			  {
				_id: {
				  $oid: '666c014007e3d433a404b2c6',
				},
				name: 'UAE License',
				iconName: 'uaeLicense',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 25,
					perHourTotal: 25,
					price: 500,
				  },
				  {
					_id: 2,
					perHourAddOn: 31,
					perHourTotal: 56,
					price: 625,
				  },
				  {
					_id: 3,
					perHourAddOn: 39,
					perHourTotal: 95,
					price: 781,
				  },
				  {
					_id: 4,
					perHourAddOn: 49,
					perHourTotal: 144,
					price: 977,
				  },
				  {
					_id: 5,
					perHourAddOn: 62,
					perHourTotal: 206,
					price: 1270,
				  },
				  {
					_id: 6,
					perHourAddOn: 79,
					perHourTotal: 285,
					price: 1650,
				  },
				  {
					_id: 7,
					perHourAddOn: 102,
					perHourTotal: 387,
					price: 2228,
				  },
				  {
					_id: 8,
					perHourAddOn: 133,
					perHourTotal: 520,
					price: 3008,
				  },
				  {
					_id: 9,
					perHourAddOn: 173,
					perHourTotal: 693,
					price: 4061,
				  },
				  {
					_id: 10,
					perHourAddOn: 242,
					perHourTotal: 935,
					price: 5685,
				  },
				],
			  },
			  {
				_id: {
				  $oid: '666c014007e3d433a404b2cc',
				},
				name: 'Thailand License',
				iconName: 'thailandLicense',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 29,
					perHourTotal: 29,
					price: 750,
				  },
				  {
					_id: 2,
					perHourAddOn: 36,
					perHourTotal: 65,
					price: 938,
				  },
				  {
					_id: 3,
					perHourAddOn: 45,
					perHourTotal: 110,
					price: 1172,
				  },
				  {
					_id: 4,
					perHourAddOn: 57,
					perHourTotal: 167,
					price: 1465,
				  },
				  {
					_id: 5,
					perHourAddOn: 72,
					perHourTotal: 239,
					price: 1904,
				  },
				  {
					_id: 6,
					perHourAddOn: 91,
					perHourTotal: 330,
					price: 2476,
				  },
				  {
					_id: 7,
					perHourAddOn: 119,
					perHourTotal: 449,
					price: 3342,
				  },
				  {
					_id: 8,
					perHourAddOn: 154,
					perHourTotal: 603,
					price: 4512,
				  },
				  {
					_id: 9,
					perHourAddOn: 201,
					perHourTotal: 804,
					price: 6091,
				  },
				  {
					_id: 10,
					perHourAddOn: 281,
					perHourTotal: 1085,
					price: 8527,
				  },
				],
			  },
			  {
				_id: {
				  $oid: '666c014007e3d433a404b2cd',
				},
				name: 'Nigeria License',
				iconName: 'nigeriaLicense',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 13,
					perHourTotal: 13,
					price: 260,
				  },
				  {
					_id: 2,
					perHourAddOn: 16,
					perHourTotal: 29,
					price: 325,
				  },
				  {
					_id: 3,
					perHourAddOn: 20,
					perHourTotal: 49,
					price: 439,
				  },
				  {
					_id: 4,
					perHourAddOn: 25,
					perHourTotal: 74,
					price: 636,
				  },
				  {
					_id: 5,
					perHourAddOn: 32,
					perHourTotal: 106,
					price: 922,
				  },
				  {
					_id: 6,
					perHourAddOn: 41,
					perHourTotal: 147,
					price: 1338,
				  },
				  {
					_id: 7,
					perHourAddOn: 53,
					perHourTotal: 200,
					price: 1939,
				  },
				  {
					_id: 8,
					perHourAddOn: 69,
					perHourTotal: 269,
					price: 2909,
				  },
				  {
					_id: 9,
					perHourAddOn: 90,
					perHourTotal: 359,
					price: 4364,
				  },
				  {
					_id: 10,
					perHourAddOn: 126,
					perHourTotal: 485,
					price: 6546,
				  },
				],
			  },
			],
			special: [
			  {
				_id: {
				  $oid: '666c01afe4b5b2aeb48016a4',
				},
				name: 'All Time Low',
				iconName: 'allTimeLow',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 30,
					perHourTotal: 30,
					price: 750,
				  },
				  {
					_id: 2,
					perHourAddOn: 38,
					perHourTotal: 68,
					price: 938,
				  },
				  {
					_id: 3,
					perHourAddOn: 47,
					perHourTotal: 115,
					price: 1266,
				  },
				  {
					_id: 4,
					perHourAddOn: 59,
					perHourTotal: 174,
					price: 1835,
				  },
				  {
					_id: 5,
					perHourAddOn: 74,
					perHourTotal: 248,
					price: 2661,
				  },
				  {
					_id: 6,
					perHourAddOn: 95,
					perHourTotal: 343,
					price: 3858,
				  },
				  {
					_id: 7,
					perHourAddOn: 123,
					perHourTotal: 466,
					price: 5595,
				  },
				  {
					_id: 8,
					perHourAddOn: 160,
					perHourTotal: 626,
					price: 8392,
				  },
				  {
					_id: 9,
					perHourAddOn: 208,
					perHourTotal: 834,
					price: 12588,
				  },
				  {
					_id: 10,
					perHourAddOn: 291,
					perHourTotal: 1125,
					price: 18882,
				  },
				],
			  },
			  {
				_id: {
				  $oid: '666c01afe4b5b2aeb48016a7',
				},
				name: 'X Premium',
				iconName: 'xPremium',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 10,
					perHourTotal: 10,
					price: 200,
				  },
				  {
					_id: 2,
					perHourAddOn: 13,
					perHourTotal: 23,
					price: 250,
				  },
				  {
					_id: 3,
					perHourAddOn: 16,
					perHourTotal: 39,
					price: 338,
				  },
				  {
					_id: 4,
					perHourAddOn: 20,
					perHourTotal: 59,
					price: 489,
				  },
				  {
					_id: 5,
					perHourAddOn: 25,
					perHourTotal: 84,
					price: 710,
				  },
				  {
					_id: 6,
					perHourAddOn: 32,
					perHourTotal: 116,
					price: 1029,
				  },
				  {
					_id: 7,
					perHourAddOn: 41,
					perHourTotal: 157,
					price: 1492,
				  },
				  {
					_id: 8,
					perHourAddOn: 53,
					perHourTotal: 210,
					price: 2238,
				  },
				  {
					_id: 9,
					perHourAddOn: 69,
					perHourTotal: 279,
					price: 3357,
				  },
				  {
					_id: 10,
					perHourAddOn: 97,
					perHourTotal: 376,
					price: 5035,
				  },
				],
			  },
			  {
				_id: {
				  $oid: '666c01afe4b5b2aeb48016a9',
				},
				name: 'Dr.GOGO',
				iconName: 'dr.GOGO',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 20,
					perHourTotal: 20,
					price: 350,
				  },
				  {
					_id: 2,
					perHourAddOn: 25,
					perHourTotal: 45,
					price: 438,
				  },
				  {
					_id: 3,
					perHourAddOn: 31,
					perHourTotal: 76,
					price: 547,
				  },
				  {
					_id: 4,
					perHourAddOn: 39,
					perHourTotal: 115,
					price: 684,
				  },
				  {
					_id: 5,
					perHourAddOn: 50,
					perHourTotal: 165,
					price: 889,
				  },
				  {
					_id: 6,
					perHourAddOn: 63,
					perHourTotal: 228,
					price: 1155,
				  },
				  {
					_id: 7,
					perHourAddOn: 82,
					perHourTotal: 310,
					price: 1560,
				  },
				  {
					_id: 8,
					perHourAddOn: 106,
					perHourTotal: 416,
					price: 2105,
				  },
				  {
					_id: 9,
					perHourAddOn: 138,
					perHourTotal: 554,
					price: 2842,
				  },
				  {
					_id: 10,
					perHourAddOn: 194,
					perHourTotal: 748,
					price: 3979,
				  },
				],
			  },
			  {
				_id: {
				  $oid: '666c01afe4b5b2aeb48016ac',
				},
				name: 'Lambo',
				iconName: 'lambo',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 100,
					perHourTotal: 100,
					price: 2300,
				  },
				  {
					_id: 2,
					perHourAddOn: 125,
					perHourTotal: 225,
					price: 2875,
				  },
				  {
					_id: 3,
					perHourAddOn: 156,
					perHourTotal: 381,
					price: 3594,
				  },
				  {
					_id: 4,
					perHourAddOn: 195,
					perHourTotal: 576,
					price: 4492,
				  },
				  {
					_id: 5,
					perHourAddOn: 248,
					perHourTotal: 824,
					price: 5840,
				  },
				  {
					_id: 6,
					perHourAddOn: 315,
					perHourTotal: 1139,
					price: 7592,
				  },
				  {
					_id: 7,
					perHourAddOn: 410,
					perHourTotal: 1549,
					price: 10249,
				  },
				  {
					_id: 8,
					perHourAddOn: 532,
					perHourTotal: 2081,
					price: 13836,
				  },
				  {
					_id: 9,
					perHourAddOn: 692,
					perHourTotal: 2773,
					price: 18679,
				  },
				  {
					_id: 10,
					perHourAddOn: 969,
					perHourTotal: 3742,
					price: 26150,
				  },
				],
			  },
			  {
				_id: {
				  $oid: '666c01afe4b5b2aeb48016ad',
				},
				name: 'NFT',
				iconName: 'nft',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 50,
					perHourTotal: 50,
					price: 750,
				  },
				  {
					_id: 2,
					perHourAddOn: 63,
					perHourTotal: 113,
					price: 938,
				  },
				  {
					_id: 3,
					perHourAddOn: 78,
					perHourTotal: 191,
					price: 1172,
				  },
				  {
					_id: 4,
					perHourAddOn: 98,
					perHourTotal: 289,
					price: 1465,
				  },
				  {
					_id: 5,
					perHourAddOn: 124,
					perHourTotal: 413,
					price: 1904,
				  },
				  {
					_id: 6,
					perHourAddOn: 158,
					perHourTotal: 571,
					price: 2476,
				  },
				  {
					_id: 7,
					perHourAddOn: 205,
					perHourTotal: 776,
					price: 3342,
				  },
				  {
					_id: 8,
					perHourAddOn: 266,
					perHourTotal: 1042,
					price: 4512,
				  },
				  {
					_id: 9,
					perHourAddOn: 346,
					perHourTotal: 1388,
					price: 6091,
				  },
				  {
					_id: 10,
					perHourAddOn: 484,
					perHourTotal: 1872,
					price: 8527,
				  },
				],
			  },
			  {
				_id: {
				  $oid: '666c01afe4b5b2aeb48016b7',
				},
				name: 'Whale',
				iconName: 'whale',
				conditions: {
				  _id: false,
				},
				levels: [
				  {
					_id: 1,
					perHourAddOn: 350,
					perHourTotal: 350,
					price: 6000,
				  },
				  {
					_id: 2,
					perHourAddOn: 438,
					perHourTotal: 788,
					price: 7500,
				  },
				  {
					_id: 3,
					perHourAddOn: 547,
					perHourTotal: 1335,
					price: 9375,
				  },
				  {
					_id: 4,
					perHourAddOn: 684,
					perHourTotal: 2019,
					price: 11719,
				  },
				  {
					_id: 5,
					perHourAddOn: 868,
					perHourTotal: 2887,
					price: 15234,
				  },
				  {
					_id: 6,
					perHourAddOn: 1103,
					perHourTotal: 3990,
					price: 19805,
				  },
				  {
					_id: 7,
					perHourAddOn: 1433,
					perHourTotal: 5423,
					price: 26736,
				  },
				  {
					_id: 8,
					perHourAddOn: 1863,
					perHourTotal: 7286,
					price: 36094,
				  },
				  {
					_id: 9,
					perHourAddOn: 2422,
					perHourTotal: 9708,
					price: 48727,
				  },
				  {
					_id: 10,
					perHourAddOn: 3391,
					perHourTotal: 13099,
					price: 68218,
				  },
				],
			  },
			],
		  });
		  return createdUser.save();
		}
		return setting;
	  }

	async updateSettingInfo(updateData: Partial<Setting>): Promise<Setting> {
		const setting = await this.settingModel.findOne().exec();
		if (!setting) {
			const newSetting = new this.settingModel(updateData);
			return newSetting.save();
		}
		Object.assign(setting, updateData);
		setting.updatedAt = new Date();
		return setting.save();
	}

}