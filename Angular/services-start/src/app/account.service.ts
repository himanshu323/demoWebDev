import { LoggingService } from './logging.service';
import { Injectable ,EventEmitter} from '@angular/core';
@Injectable()
export class AccountService{


  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggingService:LoggingService){

  }

  statusUpdate=new EventEmitter<string>();

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
      this.loggingService.onStatusChange(newAccount.status);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
      this.loggingService.onStatusChange(updateInfo.newStatus);
  }
    
}