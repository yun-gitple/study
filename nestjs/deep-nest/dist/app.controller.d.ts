import { AppService } from './app.service';
import { Cat } from './dto/cat';
import { CreateCatDto } from './dto/create-cat.dto';
import { DogCareService } from './dog-module/dog-care-module/dogs-care.service';
import { DogService } from './dog-module/dog.service';
export declare class AppController {
    private appService;
    private dogService;
    private dogCareService;
    constructor(appService: AppService, dogService: DogService, dogCareService: DogCareService);
    getAll(req: JSON): Promise<Cat[]>;
    getDog(req: JSON): void;
    create(createCatDto: CreateCatDto): Promise<any>;
    findOne(params: any): string;
    findAll(): Promise<string[]>;
    getBreed(): Promise<string>;
    setVaccineCount(count: any): void;
    getVaccineCount(): number;
}
