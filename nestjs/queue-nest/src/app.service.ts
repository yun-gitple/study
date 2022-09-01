import { Injectable } from '@nestjs/common';
import { Process, Processor, InjectQueue, OnQueueFailed, OnQueueCompleted } from '@nestjs/bull';
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
    throw Error('event error');
  }

  @Process('transcode')
  async transcode(job: Job<unknown>) {
    console.log('~~~ transcode job=%j', job);
  }

  @OnQueueFailed()
  handleFailed(job: Job, err: Error) {
    console.log(`OnQueueFailed: queue=%j, job.id=%j, job.name=%j`, this.batchQueue.name, job.id, job.name);
  }

  @OnQueueCompleted()
  handleCompleted(job: Job, result: any) {
    console.log(`OnQueueCompleted: job.id=%j, job.name=%j`, job.id, job.name);
  }
}
