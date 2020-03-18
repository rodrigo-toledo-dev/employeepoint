import '~/config/ReactotronConfig';
import { registerRootComponent } from 'expo';
import React, {useState} from 'react';
import {Provider} from 'react-redux';

import store from '~/store';
import Routes from './routes';

import {
  Body,
  Container,
  CustomImage,
  H3,
  Table,
  TableOperations,
  RowEmployees,
} from '~/components';

import TableEmployees from '~/components/TableEmployees';

import {
  StatusBar,
  Alert,
  SectionList,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Environment from '~/config/environment';

import moment from 'moment';

import axios from 'axios';

import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [employee, setEmployee] = useState(false);
  const [operation, setOperation] = useState(false);
  const [operations, setOperations] = useState(false);

  

  const confirmOperation = _operation => {
    Alert.alert(
      'Confirmar operação',
      `Deseja confirmar a operação (${_operation})?`,
      [
        {
          text: 'Não',
          onPress: () => {},
          style: 'cancel',
        },
        {text: 'Sim', onPress: () => registerOperation(_operation)},
      ],
    );
  };

  const registerOperation = _operation => {
    let newOperation = {
      employee,
      operation: _operation,
    };
    let url = `${Environment.API_URL}/operations`;
    axios.post(url, newOperation).then(res => {
      setOperations(res.data);
      setOperation(_operation);
    });
  };

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

registerRootComponent(App);
