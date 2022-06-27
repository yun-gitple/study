import { AppService } from './app.service';
import { Cat } from './dto/cat';
import { CreateCatDto } from './dto/create-cat.dto';
import { DogBreedService } from './libs/module/dogs-breed.service';
export declare class AppController {
    private appService;
    private breedService;
    constructor(appService: AppService, breedService: DogBreedService);
    getAll(req: JSON): Promise<Cat[]>;
    getDog(req: JSON): void;
    create(createCatDto: CreateCatDto): Promise<any>;
    findOne(params: any): string;
    findAll(): Promise<string[]>;
    getBreed(): Promise<any>;
}
