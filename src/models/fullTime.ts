import { Employee } from "./employee";
import { IFullTimeEmployee } from "../interfaces/iFullTime";

export class FullTimeEmployee extends Employee implements IFullTimeEmployee {
    constructor(name: string, id: number, public annualSalary: number) {
        super(name, id);
    }

    calculateSalary(): number {
        return this.annualSalary;
    }
}