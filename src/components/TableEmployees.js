import React, {useState} from 'react';
import { View } from 'react-native';
import {EmployeeSelect, EmployeeImage} from '~/components';

const TableEmployees = () => {
  const [employee, setEmployee] = useState(false);
  const [operation, setOperation] = useState(false);
  const [operations, setOperations] = useState(false);
  const resetData = employeeName => {
    setEmployee(employeeName);
    setOperation(false);
    setOperations(false);
  };
  return (
    <View>
      <EmployeeSelect onPress={() => resetData('Izabele')}>
        <EmployeeImage source={require('~/assets/isabele.jpeg')} />
      </EmployeeSelect>
      <EmployeeSelect onPress={() => resetData('Nathalie')}>
        <EmployeeImage source={require('~/assets/natali.jpg')} />
      </EmployeeSelect>
    </View>
  );
};

export default TableEmployees;
