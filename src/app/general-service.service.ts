import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {

  constructor() { }

  dummyFunc() {
    console.log('testing');
  }
}
