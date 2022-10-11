import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval } from '@nestjs/schedule';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class TasksService {
  private fooCount = 0;
  private readonly logger = new Logger(TasksService.name);
  constructor(@InjectQueue('batch') private batchQueue: Queue) {}

  // @Cron('* 10 * * * *', {
  //   timeZone: 'Asia/Seoul', // use this website: https://momentjs.com/timezone/
  // })
  // handleCron() {
  //   this.logger.debug('Cron: Called every 2 seconds');
  // }

  // @Interval(10000)
  // handleInterval() {
  //   this.logger.debug('Interval: Called every 1 seconds');
  // }

  // @Cron('* * 8 * * *', {
  //   name: 'event',
  // })
  // startEvent() {
  //   console.log('~~~ start event!');
  // }

  @Cron('*/10 * * * * *', {
    name: 'job1',
  })
  async addJob1() {
    const job = await this.batchQueue.add('job1', {
      foo: ['bar1', this.fooCount++].join(),
    });
    console.log('~~~ ', this.batchQueue.name, ', added job1 to queue!, job:', job.id);
  }

  @Cron('*/10 * * * * *', {
    name: 'job2',
  })
  async addJob2() {
    const job = await this.batchQueue.add('job2', {
      foo: ['bar2', this.fooCount++].join(),
    });
    console.log('~~~ ', this.batchQueue.name, ', added job2 to queue!, job:', job.id);
  }
}
