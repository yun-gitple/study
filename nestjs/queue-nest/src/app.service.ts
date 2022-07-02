import { Injectable } from '@nestjs/common';
import { Process, Processor, InjectQueue } from '@nestjs/bull';
import { Job, Queue, JobStatus } from 'bull';

@Injectable()
@Processor('batch')
export class AppService {
  constructor(@InjectQueue('batch') private batchQueue: Queue) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getJobs() {
    const jobs = await this.batchQueue.getJobs([]);
    console.log('~~~ get jobs: ', jobs);
  }

  @Process('event')
  getEvent(job: Job<unknown>) {
    console.log('~~~ event job=%j', job);
  }

  @Process('transcode')
  async transcode(job: Job<unknown>) {
    console.log('~~~ transcode job=%j', job);
  }
}
