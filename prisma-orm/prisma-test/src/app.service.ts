import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  
  getHello(): string {
    return 'Hello World!';
  }

  createData() {
    const result = await this.prismaService.bD_NOTIFICATION.createMany({
      data: body.cust_ids.map((custId) => ({
        CUST_ID: custId,
        CATEGORY: body.category,
        SUB_CATEGORY: body.sub_category,
        TITLE: body.title,
        TYPE: body.type,
        RESERVE_TIME: body.reserve_time,
        DEEP_LINK: deepLink,
        CONTENT: body.content,
        IMAGE_URL: body.image_url,
        CRT_ID: admin.ADM_ID,
        CRT_DT: new Date(),
        MDF_DT: new Date(),
        MDF_ID: admin.ADM_ID
      })),
      skipDuplicates: true
    });
    return result;
  }
}
