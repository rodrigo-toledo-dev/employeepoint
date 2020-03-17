import React, {useState} from 'react';
import {View} from 'react-native';
import {EmployeeSelect, EmployeeImage} from '~/components';
import {connect} from 'react-redux';

const TableEmployees = () => {
  // const [employee, setEmployee] = useState(false);
  // const [operation, setOperation] = useState(false);
  // const [operations, setOperations] = useState(false);
  const employees = [{id: 0, name: 'Nathalie'}, {id: 1, name: 'Izabele'}];

  return (
    <View>{console.log('employees')}
      {employees.map(employee => 
        <EmployeeSelect key={employee.id} onPress={() => dispatch({type: 'RESET_DATA', employee: employee.id})}>
          <EmployeeImage source={require('~/assets/{employee.name}.jpg')} />
        </EmployeeSelect>
        )
      }
    </View>
  );
};

const mapStateToProps => state({

});

export default TableEmployees;
