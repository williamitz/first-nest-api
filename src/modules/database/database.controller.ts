import { DynamicModule } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ModeEnum } from 'src/environments/environment';

export const DatabaseProvider: DynamicModule = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  async useFactory(_config: ConfigService) {
    const isProd = _config.get('APP_MODE') == ModeEnum.prod;
    const tymeormOptions = {
      type: _config.get('TYPE_DB'),
      host: _config.get('HOST'),
      port: Number(_config.get('PORT_DB')),
      username: _config.get('USER_DB'),
      password: _config.get('PASSWORD_DB'),
      database: _config.get('NAME_DB'),
      autoLoadEntities: true,
      synchronize: isProd,
    } as TypeOrmModuleOptions;

    return tymeormOptions;
  },
});
