#ifndef PARTTIMEEMPLOYEE_H
#define PARTTIMEEMPLOYEE_H

#include "Employee.h"
#include <iostream>
using namespace std;

class PartTimeEmployee : public Employee {
private:
    float hourlyRate;
    int hoursWorked;

public:
    PartTimeEmployee(const string& empName, int empId, float rate, int hours);
    float calculateSalary() const override;
};

#endif // PARTTIMEEMPLOYEE_H