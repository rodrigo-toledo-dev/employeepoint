import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as OperationsActions from '~/store/actions/operations';

import EmployeeImage from '~/components/EmployeeImage';
import {EmployeesGroup, EmployeeButton, RowEmployees} from './styles';

const TableEmployees = ({setEmployee, startWork, stopWork}) => {
  const employees = [
    {
      id: 0,
      name: 'Nathalie',
      imageProfile: require('~/assets/Nathalie.jpg'),
    },
    {
      id: 1,
      name: 'Izabele',
      imageProfile: require('~/assets/Izabele.jpg'),
    },
  ];
  return (
    <>
      <EmployeesGroup>
        {employees.map(employee => (
          <EmployeeButton
            key={employee.id}
            onPress={() => setEmployee(employee.id)}>
            <EmployeeImage employee={employee} />
          </EmployeeButton>
        ))}
      </EmployeesGroup>
    </>
  );
};

const mapStateToProps = state => ({
  employees: state,
});

const mapDispatchToProps = dispatch => bindActionCreators(OperationsActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(TableEmployees);
