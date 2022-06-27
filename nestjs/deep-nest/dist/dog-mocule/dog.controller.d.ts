import { DogCareService } from 'src/libs/module/dogs-care.service';
import { DogService } from './dog.service';
export declare class DogController {
    private dogService;
    private dogCareService;
    constructor(dogService: DogService, dogCareService: DogCareService);
    getAll(req: JSON): string;
    getBreed(): string;
    setVaccineCount(vaccine: any): void;
    getVaccineCount(): number;
}
