import { UsersModule } from "./users/users.module";
import { CardsModule } from "./cards/cards.module";
import { ColumnsModule } from "./columns/columns.module";
import { BoardsModule } from "./boards/boards.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { CommonModule } from "./common/common.module";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";

import Joi from "joi";
import { Module } from "@nestjs/common";
import { Board } from "./boards/entities/board.entity";
import { Cards } from "./cards/entities/card.entity";
import { Columns } from "./columns/entities/column.entity";
import { Comments } from "./cards/comments/entities/comment.entity";
import { Check_current } from "./cards/check_lists/entities/Check_current.entity";
import { CheckList } from "./cards/check_lists/entities/check_list.entity";
import { CardWorker } from "./cards/entities/cardworker.entity";

const typeOrmModuleOptions = {
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => ({

    entities: [
      Board,
      Cards,
      CardWorker,
      Columns,
      Comments,
      Check_current,
      CheckList,
    ],
    synchronize: true,
    logging: true,
  }),
  inject: [ConfigService],

};

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        JWT_SECRET_KEY: Joi.string().required(),
        ENV_DB_HOST_KEY: Joi.string().required(),
        ENV_DB_PORT_KEY: Joi.number().required(),
        ENV_DB_USERNAME_KEY: Joi.string().required(),
        ENV_DB_PASSWORD_KEY: Joi.string().required(),
        ENV_DB_DATABASE_KEY: Joi.string().required(),
        DB_SYNC: Joi.boolean().required(),
      }),
    }),
    TypeOrmModule.forRootAsync(typeOrmModuleOptions),
    UsersModule,
    BoardsModule,
    ColumnsModule,
    CardsModule,
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
