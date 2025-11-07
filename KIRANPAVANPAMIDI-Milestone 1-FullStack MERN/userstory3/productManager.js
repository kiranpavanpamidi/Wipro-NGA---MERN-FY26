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
// ✅ Classic decorator to log property changes
function LogChange(target, propertyKey) {
    let value = target[propertyKey];
    const getter = () => value;
    const setter = (newVal) => {
        console.log(`${propertyKey.toUpperCase()} changed from ${value} → ${newVal}`);
        value = newVal;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    });
}
class Product {
    constructor(id, name, category, price, stock) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.stock = stock;
    }
}
__decorate([
    LogChange,
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    LogChange,
    __metadata("design:type", Number)
], Product.prototype, "stock", void 0);
const products = new Map();
products.set(1, new Product(1, "Laptop", "Electronics", 1200, 10));
products.set(2, new Product(2, "T-Shirt", "Fashion", 25, 100));
// Trigger a change
products.get(1).stock = 8;
