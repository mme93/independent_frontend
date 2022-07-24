import {Injectable} from '@angular/core';
import {Profile} from '../../../model/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() {
  }

  loadProfile(): Profile  {

    return {
      country: 'Germany',
      educationLevel: 'B. Sc.',
      email: 'markus@independent.com',
      firstName: 'Markus',
      generalInfo: 'I am a software developer in Spring Boot backend and Ionic Angular frontend.',
      lastName: 'Meier',
      visibility: true
    };
  }
}
