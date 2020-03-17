import React from 'react';

import EmployeeButton from '~/components/EmployeeButton';
import { EmployeesGroup } from './styles';



const TableEmployees = () => {
  const employees = [{id: 0, name: 'Nathalie'}, {id: 1, name: 'Izabele'}];

  return (
    <EmployeesGroup>
      {employees.map(employee => 
        <EmployeeButton employee={employee} key={employee.id} onPress={() => {}} />
      )
      }
    </EmployeesGroup>
  );
};

export default TableEmployees;
