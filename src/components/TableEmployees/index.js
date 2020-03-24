import React, {useState,useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Text, TouchableOpacity, Alert} from 'react-native';

import * as EmployeesActions from '~/store/actions/employees';

import EmployeeImage from '~/components/EmployeeImage';
import {EmployeesGroup, EmployeeButton, RowEmployees, TableOperations} from './styles';
import { H3 } from '~/pages/GeneralStyles';


import Icon from 'react-native-vector-icons/FontAwesome';

import Environment from '~/config/environment';
import axios from 'axios';

const TableEmployees = ({navigation}) => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedAction, setSelectedAction] = useState(null);
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    setEmployees([
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
    ]);
  }, [])


  const handleEmployee = employee => {
    // const employee = employees.filter(employee => employee.id.toString().includes(employeeId.toString())).shift();
    const url = `${Environment.API_URL}/next_actions_for=${employee.name}`;
    console.log(url)
    // axios.get(url).then(response => {
    //   console.log(response)
    //   // setSelectedEmployee(employee);
    //   // setSelectedAction(employee);
    // });
  }

  const confirmOperation = operation => {
    Alert.alert(
      'Confirmar operação',
      `Deseja confirmar a operação (${operation})?`,
      [
        {
          text: 'Não',
          onPress: () => {},
          style: 'cancel',
        },
        {text: 'Sim', onPress: () => registerOperation(operation)},
      ],
    );
  };

  const registerOperation = operation => {
    const newOperation = {
      employee: selectedEmployee,
      operation: operation,
    };
    const url = `${Environment.API_URL}/operations`;
    console.log(url)
    // axios.post(url, newOperation).then(response => {
    //   navigation.navigate('Operations', { selectedEmployee: selectedEmployee })
    // });
  };
  return (
    <>
      <EmployeesGroup>
        {employees.map(employee => (
          <EmployeeButton
            key={employee.id}
            onPress={() => handleEmployee(employee)}>
            <EmployeeImage employee={employee} />
          </EmployeeButton>
        ))}
      </EmployeesGroup>
      {selectedEmployee !== null && (
        <RowEmployees>
          <H3>Oi {selectedEmployee.name}, você tem duas opções na empresa</H3>
          <TableOperations>
            <TouchableOpacity
              onPress={() => confirmOperation('Marcar Chegada')}>
              <Icon name="check-circle" size={60} color="#5b5f63" />
              <Text>Chegar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => confirmOperation('Marcar Saída')}>
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
  operations: state,
  selectedEmployee: state,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(EmployeesActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(TableEmployees);
