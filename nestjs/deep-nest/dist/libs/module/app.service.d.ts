import { Cat } from '../../dto/cat';
import { CreateCatDto } from '../../dto/create-cat.dto';
export declare class AppService {
    private readonly cats;
    getHello(): string;
    create(catDto: CreateCatDto): void;
    finaAll(): Promise<Cat[]>;
}
