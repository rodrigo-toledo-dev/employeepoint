import '~/config/ReactotronConfig';
import { registerRootComponent } from 'expo';
import React, {useState} from 'react';
import {Provider} from 'react-redux';

import store from '~/store';

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
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Body>
          <CustomImage source={require('~/assets/logo.jpg')} />

          <H3>Sistema de Ponto Filó</H3>
          <Container>
            <TableEmployees />
            {employee && (
              <RowEmployees>
                <H3>Oi {employee}, você tem duas opções na empresa</H3>
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
            
          </Container>
          {employee && operations && (
            <>
              <Container style={{marginBottom: 30}}>
                <H3>Operações de Hoje</H3>
                <Table>
                  <View style={{width: '36%'}}>
                    <H3>Horário</H3>
                  </View>
                  <View>
                    <H3>Operação</H3>
                  </View>
                </Table>
                <SectionList
                  sections={[
                    {
                      data: operations,
                    },
                  ]}
                  renderItem={({item}) => (
                    <Table>
                      <View style={{width: '36%'}}>
                        <Text>
                          {moment(item.created_at).format('DD/MM/YYYY HH:mm')}
                        </Text>
                      </View>
                      <View>
                        <Text>{item.operation}</Text>
                      </View>
                    </Table>
                  )}
                  keyExtractor={(item, index) => index}
                />
              </Container>
            </>
          )}
        </Body>
      </SafeAreaView>
    </Provider>
  );
};

registerRootComponent(App);
