import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import * as OperationsActions from '~/store/actions/operations';

import EmployeeImage from '~/components/EmployeeImage';
import {EmployeesGroup, EmployeeButton} from './styles';

const TableEmployees = ({employees, setEmployee, startWork, stopWork}) => {
  return (
    <EmployeesGroup>
      {employees.map(employee => (
        <EmployeeButton
          key={employee.id}
          onPress={() => setEmployee(employee.id)}>
          <EmployeeImage employee={employee} />
        </EmployeeButton>
      ))}
    </EmployeesGroup>
  );
};

const mapStateToProps = state => ({
  employees: state,
});

const mapDispatchToProps = dispatch => bindActionCreators(OperationsActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(TableEmployees);
