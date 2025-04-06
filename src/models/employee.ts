import { IEmployee } from "../interfaces/iEmployee";

export abstract class Employee implements IEmployee {
    constructor(public name: string, public id: number) {}

    abstract calculateSalary(): number;

    displayDetails(): void {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Salary: ${this.calculateSalary()}`);
    }
}