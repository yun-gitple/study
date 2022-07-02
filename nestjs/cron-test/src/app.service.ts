import { Injectable } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';

@Injectable()
export class AppService {
  constructor(private schedulerRegistry: SchedulerRegistry) {}

  getHello(): string {
    return 'Hello World!';
  }

  executeJob(name: string): boolean {
    console.log('~~~ execute job: ', name);
    const cronJob = this.schedulerRegistry.getCronJob(name);
    cronJob.start();
    console.log('~~~ started job', cronJob);
    return true;
  }
}
