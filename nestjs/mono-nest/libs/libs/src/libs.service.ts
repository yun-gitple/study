import { Injectable } from '@nestjs/common';

@Injectable()
export class LibsService {
  static sortNSearch() {
    const data =
      "Tensions between Russia and the West have escalated, following President Putin's decision to invade Ukraine on 24 February. Mr Putin has made several references to nuclear weapons since then, which some have interpreted as a warning to Western countries not to intervene";

    const dataArray = data.split(' ');
    for (const item of dataArray) {
      console.log('item:', item);
    }
  }
}
