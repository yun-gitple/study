import { Injectable } from '@nestjs/common';
import { Process, Processor, InjectQueue, OnQueueActive, OnQueueFailed, OnQueueCompleted, OnQueueError, OnQueueStalled } from '@nestjs/bull';
import { Job, Queue, JobStatus } from 'bull';

@Injectable()
@Processor('batch')
export class AppService {
  constructor(@InjectQueue('batch') private batchQueue: Queue) {}

  getHello(): string {
    return 'Hello World!';
  }

  async logAPIs() {
    const name = this.batchQueue.name;
    // console.log('[', name, '], client: ', this.batchQueue.client);
    console.log('[', name, '], clientName: ', this.batchQueue.clientName());
    console.log('[', name, '], count: ', await this.batchQueue.count());
    console.log('[', name, '], eventNames: ', this.batchQueue.eventNames());
    // console.log('[', name, '], getActive: ', await this.batchQueue.getActive());
    // console.log('[', name, '], getCompleted: ', await this.batchQueue.getCompleted());
    // console.log('[', name, '], getCompletedCount: ', await this.batchQueue.getCompletedCount());
    // console.log('[', name, '], getDelayed: ', await this.batchQueue.getDelayed());
    // console.log('[', name, '], getDelayedCount: ', await this.batchQueue.getDelayedCount());
    // console.log('[', name, '], getFailed: ', await this.batchQueue.getFailed());
    // console.log('[', name, '], getFailedCount: ', await this.batchQueue.getFailedCount());
    // console.log('[', name, '], getJobCountByTypes: ', this.batchQueue.getJobCountByTypes);
    // console.log('[', name, '], getJobCounts: ', await this.batchQueue.getJobCounts());
    // console.log('[', name, '], getJobLogs: ', await this.batchQueue.getJobLogs());
    // console.log('[', name, '], getNextJob: ', await this.batchQueue.getNextJob());
    // console.log('[', name, '], getPausedCount: ', await this.batchQueue.getPausedCount());
    // console.log('[', name, '], getRepeatableCount: ', await this.batchQueue.getRepeatableCount());
    // console.log('[', name, '], getRepeatableJobs: ', await this.batchQueue.getRepeatableJobs());
    // console.log('[', name, '], getWaiting: ', await this.batchQueue.getWaiting());
    // console.log('[', name, '], getWaitingCount: ',await this.batchQueue.getWaitingCount());
    // console.log('[', name, '], getWorkers: ', await this.batchQueue.getWorkers());
    // console.log('[', name, '], isPaused: ', await this.batchQueue.isPaused());
    // console.log('[', name, '], isReady: ', await this.batchQueue.isReady());
    console.log('[', name, '], listenerCount: ', this.batchQueue.listenerCount('event'));
    console.log('[', name, '], listeners: ', this.batchQueue.listeners('event'));
    // console.log('[', name, '], multi: ', this.batchQueue.multi());
    // console.log('[', name, '], nextRepeatableJob: ', this.batchQueue.nextRepeatableJob);
    // console.log('[', name, '], process: ', this.batchQueue.process());
    // console.log('[', name, '], whenCurrentJobsFinished: ', this.batchQueue.whenCurrentJobsFinished);
  }

  async getJobs() {
    const jobs = await this.batchQueue.getJobs([]);
    console.log('~~~ get jobs: ', jobs);
  }

<<<<<<< HEAD
  @Process('job1')
  async getEvent(job: Job<unknown>) {
    console.log(
      '~~~ ',
      this.batchQueue.name,
      ' process job1:',
      job.id,
      job.name,
      await job.getState(),
    );
=======
  @Process('event')
  getEvent(job: Job<unknown>) {
    console.log('~~~ event job=%j', job);
    throw Error('event error');
>>>>>>> cbb1a76387b660941c504e9458074e04102806b7
  }

  // @Process('job2')
  // async getEvent2(job: Job<unknown>) {
  //   console.log(
  //     '~~~ ',
  //     this.batchQueue.name,
  //     ' process job2:',
  //     job.id,
  //     job.name,
  //     await job.getState(),
  //   );
  // }

  // @Process('*')
  // async getAny(job: Job<unknown>) {
  //   console.log(
  //     '~~~ ',
  //     this.batchQueue.name,
  //     ' any job:',
  //     job.id,
  //     job.name,
  //     await job.getState(),
  //   );
  // }

  @OnQueueActive()
  onActive(job: Job) {
    // console.log(
    //   `~~~ ${this.batchQueue.name}, Processing job ${job.id} of type ${job.name} with data ${job.data}...`
    // );
  }

  @OnQueueFailed()
  handleFailed(job: Job, err: Error) {
    console.log(
      `[[[]]] ${this.batchQueue.name},Failed job ${job.id} of type ${job.name} with data ${job.data}... error ${err}`
    );

    job.opts.delay = 10000;
    job.retry();
  }

  @OnQueueCompleted()
  handleCompleted(job: Job, result: any) {
    // console.log(
    //   `~~~ ${this.batchQueue.name}, Completed job ${job.id} of type ${job.name} with data ${job.data}... result ${result}`
    // );
  }

  @OnQueueError()
  handleError(err: Error) {
    console.log(
      `[[[]]] ${this.batchQueue.name}, Queue error... error ${err}`
    );
  }

  @OnQueueStalled()
  handleStalled(job: Job) {
    console.log(
      `[[[]]] ${this.batchQueue.name},Stalled job ${job.id} of type ${job.name} with data ${job.data}`
    );
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
