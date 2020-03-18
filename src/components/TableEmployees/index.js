import React from 'react';

import EmployeeButton from '~/components/EmployeeButton';
import { EmployeesGroup } from './styles';

const TableEmployees = () => {
  const employees = [
    {
      id: 0,
      name: 'Nathalie',
      imageProfile: require('~/assets/Nathalie.jpg'),
    },
    {
      id: 1,
      name: 'Izabele',
      imageProfile: require('~/assets/Izabele.jpg')
    },
  ];

  return (
    <EmployeesGroup>
      {employees.map(employee => (
        <EmployeeButton
          employee={employee}
          key={employee.id}
          onPress={() => {}}
        />
      ))}
    </EmployeesGroup>
  );
};

export default TableEmployees;
