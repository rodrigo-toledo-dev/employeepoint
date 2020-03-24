import React, {useState, useEffect} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as OperationsActions from '~/store/actions/operations';
import { ApplicationImage, Body, H3, Container } from '~/pages/GeneralStyles';
import { AsyncStorage } from 'react-native';

// navigation.getParam('selectedEmployee');

// 
// useEffect(() => {
//   setEmployees([
//     {
//       id: 0,
//       name: 'Nathalie',
//       imageProfile: require('~/assets/Nathalie.jpg'),
//     },
//     {
//       id: 1,
//       name: 'Izabele',
//       imageProfile: require('~/assets/Izabele.jpg'),
//     },
//   ]);
// }, []);

const Operations = ({navigation}) => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedEmployeeName, setSelectedEmployeeName] = useState(null);

  useEffect(() => {
    setSelectedEmployee(navigation.state.params.selectedEmployee.id)
    setSelectedEmployeeName(navigation.state.params.selectedEmployee.name)
  }, []);

  return (
    <>
      <Body>
        <ApplicationImage source={require('~/assets/logo.jpg')} />
        <H3>List of Day Operations {selectedEmployeeName}</H3>
        <Container></Container>
      </Body>
    </>
  );
}

// const mapStateToProps = state => ({
//   operations: state,
//   selectedEmployee: state,
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(OperationsActions, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(Operations);
export default(Operations);
