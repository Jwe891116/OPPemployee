import { IEmployee } from "./iEmployee";

export interface IPartTimeEmployee extends IEmployee {
    hourlyRate: number;
    hoursWorked: number;
}