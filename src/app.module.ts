import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AnimalModule } from './animal/animal.module';

@Module({
  imports: [AnimalModule],
  controllers: [],
  providers: [{
    provide: APP_INTERCEPTOR,
    useClass: ClassSerializerInterceptor
  }],
})
export class AppModule {}
