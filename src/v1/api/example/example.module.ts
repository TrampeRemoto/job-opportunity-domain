import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ExampleResolver } from "./example.resolver";

import { ExampleService } from "./example.service";

import { ExampleEntity } from "./example.entity";

@Module({
	imports: [TypeOrmModule.forFeature([ExampleEntity])],
	providers: [ExampleService, ExampleResolver],
})
export class ExampleModule {}
