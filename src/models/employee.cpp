#include "Employee.h"
#include <iostream>
using namespace std;

Employee::Employee(const string& empName, int empId) 
    : name(empName), id(empId) {}

void Employee::displayDetails() const {
        cout << "Name: " << name << "\n"
              << "ID: " << id << "\n"
              << "Salary: " << calculateSalary() << "\n";
}