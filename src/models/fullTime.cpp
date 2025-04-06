#include "FullTimeEmployee.h"
#include <iostream>
using namespace std;

FullTimeEmployee::FullTimeEmployee(const string& empName, int empId, float salary)
    : Employee(empName, empId), annualSalary(salary) {}

float FullTimeEmployee::calculateSalary() const {
    return annualSalary;
}