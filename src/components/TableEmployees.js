import React, {useState} from 'react';
import {View} from 'react-native';
import {EmployeeSelect, EmployeeImage} from '~/components';
import {connect} from 'react-redux';

const TableEmployees = ({employees, dispatch }) => {
  // const [employee, setEmployee] = useState(false);
  // const [operation, setOperation] = useState(false);
  // const [operations, setOperations] = useState(false);

  return (
    <View>
      {employees.map(employee => 
        <EmployeeSelect onPress={() => dispatch({type: 'RESET_DATA', employee: employee})}>
          <EmployeeImage source={require('~/assets/{employee}.jpg')} />
        </EmployeeSelect>
        )
      }
    </View>
  );
};

const mapStateToProps => state({

});

export default connect()(TableEmployees);
