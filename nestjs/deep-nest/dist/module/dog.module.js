"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogModule = void 0;
const common_1 = require("@nestjs/common");
const dogs_care_service_1 = require("../libs/module/dogs-care.service");
const dog_controller_1 = require("./dog.controller");
const dog_service_1 = require("./dog.service");
let DogModule = class DogModule {
};
DogModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [dog_controller_1.DogController],
        providers: [dog_service_1.DogService, dogs_care_service_1.DogCareService],
        exports: [dog_service_1.DogService, dogs_care_service_1.DogCareService],
    })
], DogModule);
exports.DogModule = DogModule;
//# sourceMappingURL=dog.module.js.map