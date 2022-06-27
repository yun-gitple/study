"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogController = void 0;
const common_1 = require("@nestjs/common");
const dogs_care_service_1 = require("./dog-care-module/dogs-care.service");
const dog_service_1 = require("./dog.service");
let DogController = class DogController {
    constructor(dogService, dogCareService) {
        this.dogService = dogService;
        this.dogCareService = dogCareService;
    }
    getAll(req) {
        console.log('~~ req', req);
        return this.dogService.getDog();
    }
    getBreed() {
        return this.dogCareService.getBreed();
    }
    setVaccineCount(vaccine) {
        this.dogCareService.addVaccineCount(vaccine.count);
    }
    getVaccineCount() {
        return this.dogCareService.getVaccineCount();
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DogController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('breed'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DogController.prototype, "getBreed", null);
__decorate([
    (0, common_1.Post)('vaccine'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DogController.prototype, "setVaccineCount", null);
__decorate([
    (0, common_1.Get)('vaccine'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DogController.prototype, "getVaccineCount", null);
DogController = __decorate([
    (0, common_1.Controller)('dog'),
    __metadata("design:paramtypes", [dog_service_1.DogService,
        dogs_care_service_1.DogCareService])
], DogController);
exports.DogController = DogController;
//# sourceMappingURL=dog.controller.js.map