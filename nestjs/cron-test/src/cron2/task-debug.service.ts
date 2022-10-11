import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval } from '@nestjs/schedule';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class Tasks2Service {
  private foo2Count = 0;
  private readonly logger = new Logger(Tasks2Service.name);
  constructor(@InjectQueue('batch-debug') private batchQueue: Queue) {}

  // @Cron('* 10 * * * *', {
  //   timeZone: 'Asia/Seoul', // use this website: https://momentjs.com/timezone/
  // })
  // handleCron() {
  //   this.logger.debug('Cron: Called every 2 seconds');
  // }

  @Cron('*/10 * * * * *', {
    name: 'job-debug1',
  })
  async addJobDebug1() {
    const job = await this.batchQueue.add('job-debug1', {
      foo2: ['bar-debug', this.foo2Count++].join(),
    });
    console.log('~~~ ', this.batchQueue.name, ', added job-debug1 to queue!, job: ', job.id);
  }

  @Cron('*/10 * * * * *', {
    name: 'job-debug2',
  })
  async addJobDebug2() {
    const job = await this.batchQueue.add('job-debug2', {
      foo2: ['bar-debug2', this.foo2Count++].join(),
    });
    console.log('~~~ ', this.batchQueue.name, ', added job-debug2 to queue!, job: ', job.id);
  }
}
