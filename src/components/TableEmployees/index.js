import React, {useState} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as OperationsActions from '~/store/actions/employees';

import EmployeeImage from '~/components/EmployeeImage';
import {EmployeesGroup, EmployeeButton, RowEmployees, TableOperations} from './styles';

import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { H3 } from '~/pages/GeneralStyles';

const TableEmployees = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employeeName, setEmployeeName] = useState('');

  const confirmOperation = (action) => {

  }
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

  const handleEmployee = (employeeId) => {

    const employee = employees.filter(employee => employee.id.toString().includes(employeeId.toString())).shift();
    setSelectedEmployee(employee.id);
    setEmployeeName(employee.name);
  }
  return (
    <>
      <EmployeesGroup>
        {employees.map(employee => (
          <EmployeeButton
            key={employee.id}
            onPress={() => handleEmployee(employee.id)}>
            <EmployeeImage employee={employee} />
          </EmployeeButton>
        ))}
      </EmployeesGroup>
      {selectedEmployee !== null && (
        <RowEmployees>
          <H3>Oi {employeeName}, você tem duas opções na empresa</H3>
          <TableOperations>
            <TouchableOpacity
              onPress={() => confirmOperation('Marcar Chegada')}>
              <Icon name="check-circle" size={60} color="#5b5f63" />
              <Text>Chegar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => confirmOperation('Marcar Saída')}>
              <Icon name="share-square" size={60} color="#5b5f63" />
              <Text>Sair</Text>
            </TouchableOpacity>
          </TableOperations>
        </RowEmployees>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  employees: state,
});

const mapDispatchToProps = dispatch => bindActionCreators(OperationsActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(TableEmployees);
