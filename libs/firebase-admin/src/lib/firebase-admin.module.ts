import { Module } from '@nestjs/common';
import { FirebaseAdminService } from './firebase-admin.service';

@Module({
  controllers: [],
  providers: [FirebaseAdminService],
  exports: [],
})
export class FirebaseAdminModule { }
