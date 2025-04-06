#ifndef FULLTIMEEMPLOYEE_H
#define FULLTIMEEMPLOYEE_H

#include "Employee.h"
#include <iostream>
using namespace std;

class FullTimeEmployee : public Employee {
private:
    float annualSalary;

public:
    FullTimeEmployee(const string& empName, int empId, float salary);
    float calculateSalary() const override;
};

#endif // FULLTIMEEMPLOYEE_H