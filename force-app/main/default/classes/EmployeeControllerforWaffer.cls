public with sharing class EmployeeControllerforWaffer {
    public list<EmployeeWaffer> emp;
    public void EmployeeforWaffer() {
        emp=new list<EmployeeWaffer>();
        // Employee1
        EmployeeWaffer emp1=new EmployeeWaffer();
        emp1.EmpName='Ganesh';
        emp1.EmpId=3456;
        emp1.EmpPhone=6989879709;
        emp1.EmpEmail=ganesg@345;

        conatct f1=new contact();
        f1.FirstName='Guru';
        f1.LastName='Bhai';
        f1.phone=656908234;

        conatct m1=new contact();
        m1.FirstName='Lakshmi';
        m1.LastName='Amma';
        m1.phone=656908234;

        emp1.EmpParents=new list<contact>();
        emp1.EmpParents.add(f1);
        emp1.EmpParents.add(m1);
    System.debug(emp1);




    }
}