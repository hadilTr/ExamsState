import { Injectable } from '@angular/core';

export interface Update {
  level?: string;
  subject?: string;
  validation_status?: string;
  verification_status?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  getUpdatesData(): Update[] {
    return [
      {
        level: 'INFO 2',
        subject: 'French',
        validation_status: 'Yes',
        verification_status: 'Yes'
      },
      {
        level: 'INFO 2',
        subject: 'French',
        validation_status: 'Yes',
        verification_status: 'Yes'
      },{
        level: 'INFO 2',
        subject: 'French',
        validation_status: 'Yes',
        verification_status: 'Yes'
      },{
        level: 'INFO 2',
        subject: 'French',
        validation_status: 'Yes',
        verification_status: 'Yes'
      },{
        level: 'INFO 2',
        subject: 'French',
        validation_status: 'Yes',
        verification_status: 'Yes'
      },{
        level: 'INFO 2',
        subject: 'French',
        validation_status: 'Yes',
        verification_status: 'Yes'
      },{
        level: 'INFO 2',
        subject: 'French',
        validation_status: 'Yes',
        verification_status: 'Yes'
      },{
        level: 'INFO 2',
        subject: 'French',
        validation_status: 'Yes',
        verification_status: 'Yes'
      }
    ];
  }
}
