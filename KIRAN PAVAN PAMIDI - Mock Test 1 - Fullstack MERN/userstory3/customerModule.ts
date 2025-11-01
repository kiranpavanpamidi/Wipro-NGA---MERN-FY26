// userstory3/customerModule.ts

export interface Customer {
  id: number;
  name: string;
  email: string;
}

export class CustomerManager {
  private customers: Customer[] = [];

  addCustomer(customer: Customer): void {
    this.customers.push(customer);
  }

  getAllCustomers(): Customer[] {
    return this.customers;
  }

  updateCustomer(id: number, updatedData: Partial<Customer>): void {
    const customer = this.customers.find(c => c.id === id);
    if (customer) {
      Object.assign(customer, updatedData);
    }
  }

  deleteCustomer(id: number): void {
    this.customers = this.customers.filter(c => c.id !== id);
  }
}
