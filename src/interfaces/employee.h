#ifndef EMPLOYEE_H
#define EMPLOYEE_H

#include <iostream>
using namespace std;

class Employee {
protected:
    string name;
    int id;

public:
    Employee(const string& empName, int empId);
    virtual ~Employee() = default;

    // Pure virtual function makes this class abstract
    virtual float calculateSalary() const = 0;

    void displayDetails() const;
};

#endif // EMPLOYEE_H