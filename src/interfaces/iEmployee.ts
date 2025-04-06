export interface IEmployee {
    name: string;
    id: number;
    calculateSalary(): number;
    displayDetails(): void;
}