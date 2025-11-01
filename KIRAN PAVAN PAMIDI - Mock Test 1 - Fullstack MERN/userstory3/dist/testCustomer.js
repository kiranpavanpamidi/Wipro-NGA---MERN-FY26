"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// userstory3/testCustomer.ts
const customerModule_1 = require("./customerModule");
const manager = new customerModule_1.CustomerManager();
manager.addCustomer({ id: 1, name: "John Doe", email: "john@example.com" });
manager.addCustomer({ id: 2, name: "Jane Smith", email: "jane@example.com" });
console.log("All customers:", manager.getAllCustomers());
manager.updateCustomer(1, { name: "John Updated" });
console.log("After update:", manager.getAllCustomers());
manager.deleteCustomer(2);
console.log("After deletion:", manager.getAllCustomers());
