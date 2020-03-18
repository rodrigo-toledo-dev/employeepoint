import React from 'react';
import { connect } from 'react-redux';
import {Text} from 'react-native';

import EmployeeImage from '~/components/EmployeeImage';
import {EmployeesGroup, EmployeeButton} from './styles';

const TableEmployees = ({employees, dispatch}) => {

  return (
    <EmployeesGroup>
      {employees.map(employee => (
        <EmployeeButton
          key={employee.id}
          onPress={() => dispatch({type: 'SET_EMPLOYEE', id: employee.id})}>
            <EmployeeImage employee={employee} />
        </EmployeeButton>
      ))}
    </EmployeesGroup>
  );
};

const mapStateToProps = state => ({
  employees: state,
});

export default connect(mapStateToProps)(TableEmployees);
