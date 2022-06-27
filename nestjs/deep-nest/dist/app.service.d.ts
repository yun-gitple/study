import { Cat } from './dto/cat';
import { CreateCatDto } from './dto/create-cat.dto';
import { MongoDB } from './libs/module/mongo.service';
export declare class AppService {
    private mongo;
    private readonly cats;
    constructor(mongo: MongoDB);
    getHello(): string;
    create(catDto: CreateCatDto): void;
    finaAll(): Promise<Cat[]>;
}
