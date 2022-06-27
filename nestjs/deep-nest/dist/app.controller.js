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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const create_cat_dto_1 = require("./dto/create-cat.dto");
const dogs_care_service_1 = require("./dog-module/dog-care-module/dogs-care.service");
const dog_service_1 = require("./dog-module/dog.service");
let AppController = class AppController {
    constructor(appService, dogService, dogCareService) {
        this.appService = appService;
        this.dogService = dogService;
        this.dogCareService = dogCareService;
    }
    getAll(req) {
        console.log('~~ req', req);
        return this.appService.finaAll();
    }
    getDog(req) {
        console.log('~~ req', req);
    }
    async create(createCatDto) {
        console.log('~~~ create cat, ', createCatDto);
        return this.appService.create(createCatDto);
    }
    findOne(params) {
        console.log('~~~ params, ', params);
        return `this action returns ${params.id} cat`;
    }
    async findAll() {
        return ['jongha', 'dohyeon'];
    }
    async getBreed() {
        return this.dogCareService.getBreed();
    }
    setVaccineCount(count) {
        console.log('~~~~ set count: ', count.count);
        this.dogCareService.addVaccineCount(count.count);
    }
    getVaccineCount() {
        const count = this.dogCareService.getVaccineCount();
        console.log('~~~~ get count: ', count);
        return count;
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('dog'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getDog", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cat_dto_1.CreateCatDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id/name'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('go'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('dog/breed'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getBreed", null);
__decorate([
    (0, common_1.Post)('dog/vaccine'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "setVaccineCount", null);
__decorate([
    (0, common_1.Get)('dog/vaccine'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], AppController.prototype, "getVaccineCount", null);
AppController = __decorate([
    (0, common_1.Controller)('app'),
    __metadata("design:paramtypes", [app_service_1.AppService,
        dog_service_1.DogService,
        dogs_care_service_1.DogCareService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map