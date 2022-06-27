import { MongoDB } from 'src/libs/module/mongo.service';
export declare class DogService {
    private mongo;
    constructor(mongo: MongoDB);
    getDog(): string;
}
