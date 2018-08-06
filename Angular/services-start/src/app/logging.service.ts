export class LoggingService{

onStatusChange(statusChange:string){
    console.log('A server status changed, new status: ' + statusChange);
}

}