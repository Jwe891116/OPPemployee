#include "PartTimeEmployee.h"
#include <iostream>
using namespace std;

PartTimeEmployee::PartTimeEmployee(const string& empName, int empId, float rate, int hours)
    : Employee(empName, empId), hourlyRate(rate), hoursWorked(hours) {}

float PartTimeEmployee::calculateSalary() const {
    return hourlyRate * hoursWorked;
}