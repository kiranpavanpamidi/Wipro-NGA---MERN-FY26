// userstory3/testCustomer.ts
import { CustomerManager } from "./customerModule";

const manager = new CustomerManager();

manager.addCustomer({ id: 1, name: "John Doe", email: "john@example.com" });
manager.addCustomer({ id: 2, name: "Jane Smith", email: "jane@example.com" });

console.log("All customers:", manager.getAllCustomers());

manager.updateCustomer(1, { name: "John Updated" });
console.log("After update:", manager.getAllCustomers());

manager.deleteCustomer(2);
console.log("After deletion:", manager.getAllCustomers());
