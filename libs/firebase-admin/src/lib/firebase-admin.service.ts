import { Injectable } from '@nestjs/common';
import { initializeApp, applicationDefault, getApp } from 'firebase-admin/app';

@Injectable()
export class FirebaseAdminService {
  private fireApp = initializeApp({
    credential: applicationDefault(),
  });
}
