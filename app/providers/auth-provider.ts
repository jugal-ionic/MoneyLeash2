import {provide} from 'angular2/core';
import {FIREBASE_URL} from './firebase-urls';
import {AuthService} from './auth-service';

export const AuthProvider: any[] = [
  provide(AuthService, {
    useFactory: (): AuthService => {
      return new AuthService(new Firebase(FIREBASE_URL));
    }
  })
];
