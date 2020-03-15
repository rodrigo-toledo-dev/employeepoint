import React, {useState} from 'react';
import {View} from 'react-native';
import {EmployeeSelect, EmployeeImage} from '~/components';
import {connect} from 'react-redux';

const TableEmployees = ({employees, dispatch }) => {
  // const [employee, setEmployee] = useState(false);
  // const [operation, setOperation] = useState(false);
  // const [operations, setOperations] = useState(false);
  // const resetData = employeeName => {
  //   setEmployee(employeeName);
  //   setOperation(false);
  //   setOperations(false);
  // };
  return (
    <View>
      {this.employees.map((employee) => },
      \
      <EmployeeSelect onPress={() => resetData('Izabele')}>
        <EmployeeImage source={require('~/assets/isabele.jpeg')} />
      </EmployeeSelect>
      <EmployeeSelect onPress={() => resetData('Nathalie')}>
        <EmployeeImage source={require('~/assets/natali.jpg')} />
      </EmployeeSelect>
    </View>
  );
};

const mapStateToProps => state({

});

export default connect()(TableEmployees);
