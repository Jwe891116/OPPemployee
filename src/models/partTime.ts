import { Employee } from "./employee";
import { IPartTimeEmployee } from "../interfaces/iPartTime";

export class PartTimeEmployee extends Employee implements IPartTimeEmployee {
    constructor(
        name: string, 
        id: number, 
        public hourlyRate: number, 
        public hoursWorked: number
    ) {
        super(name, id);
    }

    calculateSalary(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}