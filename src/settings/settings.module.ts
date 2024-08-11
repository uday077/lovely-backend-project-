import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';
import { Setting, SettingSchema } from './setting.model';

@Module({
	imports: [MongooseModule.forFeature([{ name: Setting.name, schema: SettingSchema }])],
	controllers: [SettingsController],
	providers: [SettingsService],
	exports: [SettingsService],
})
export class SettingsModule {}