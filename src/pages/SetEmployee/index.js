import React from 'react';
import TableEmployees from '~/components/TableEmployees';
import { ApplicationImage, Body, H3, Container } from '~/pages/GeneralStyles';

export default function SetEmployee({navigation}) {
  return (
    <Body>
      <ApplicationImage source={require('~/assets/logo.jpg')} />
      <H3>Controle de Horas Filó</H3>
      <Container>
        <TableEmployees navigation={navigation} />
      </Container>
    </Body>
  )
}
