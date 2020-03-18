import React, { Component } from 'react';

import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Body, Container, ApplicationImage, H3 } from '../GeneralStyles';
import { RowEmployees, TableOperations } from './styles';
import TableEmployees from '~/components/TableEmployees';

export default class SetEmployee extends Component {
  render() {
    return (
      <Body>
        <ApplicationImage source={require('~/assets/logo.jpg')} />
        <H3>Workout Point Filó</H3>
        <Container>
          <TableEmployees />
          <RowEmployees>
            <H3>Oi ..., você tem duas opções na empresa</H3>
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
        </Container>
      </Body>
    )
  }
}
