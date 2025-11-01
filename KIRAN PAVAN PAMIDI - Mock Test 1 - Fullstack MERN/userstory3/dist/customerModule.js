"use strict";
// userstory3/customerModule.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerManager = void 0;
class CustomerManager {
    constructor() {
        this.customers = [];
    }
    addCustomer(customer) {
        this.customers.push(customer);
    }
    getAllCustomers() {
        return this.customers;
    }
    updateCustomer(id, updatedData) {
        const customer = this.customers.find(c => c.id === id);
        if (customer) {
            Object.assign(customer, updatedData);
        }
    }
    deleteCustomer(id) {
        this.customers = this.customers.filter(c => c.id !== id);
    }
}
exports.CustomerManager = CustomerManager;
