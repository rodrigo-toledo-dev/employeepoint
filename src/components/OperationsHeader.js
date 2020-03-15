import React from 'react';
import {View} from 'react-native';
import {H3, Table} from '~/components';

const OperationsHeader = () => {
  return (
    <View>
      <H3>Operações de Hoje</H3>
      <Table>
        <View style={{width: '36%'}}>
          <H3>Horário</H3>
        </View>
        <View>
          <H3>Operação</H3>
        </View>
      </Table>
    </View>
  );
};

export default OperationsHeader;
