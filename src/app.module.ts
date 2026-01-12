import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ClinicsModule } from './clinics/clinics.module';

@Module({
  imports: [UsersModule, ClinicsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
