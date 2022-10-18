import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError, AxiosResponse } from 'axios';
import { firstValueFrom, map, Observable, catchError } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async finaAll(): Promise<any> {
    const response = this.httpService.get('http://localhost:3000').pipe(
      map((e: any) => {
        console.log('map:', e.data);
        return 'this is mapped data by super jong';
      }),
      catchError((err: any, caught: Observable<any>): Observable<any> => {
        console.log('[getRedirectUrl] response error', err);
        return err.message;
      }),
    );
    const value = await firstValueFrom(response);
    try {
      console.log('value:', value);
    } catch (err) {
      console.log('err:', typeof err);
    }

    console.log('return!');
    return value.data;
  }

  private cutCircularJson(object: any) {
    // stringify an object, avoiding circular structures
    // https://stackoverflow.com/a/31557814
    const simpleObject = {};
    for (const prop in object) {
      if (!object.hasOwnProperty(prop)) {
        continue;
      }
      if (typeof object[prop] == 'object') {
        continue;
      }
      if (typeof object[prop] == 'function') {
        continue;
      }
      simpleObject[prop] = object[prop];
    }

    return JSON.stringify(simpleObject); // returns cleaned up JSON
  }
}
