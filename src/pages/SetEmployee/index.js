import React, { Component } from 'react';
import TableEmployees from '~/components/TableEmployees';
import { ApplicationImage, Body, H3, Container } from '~/pages/GeneralStyles';

export default class SetEmployee extends Component {
  render() {
    return (
      <Body>
        <ApplicationImage source={require('~/assets/logo.jpg')} />
        <H3>Workout Point Filó</H3>
        <Container>
          <TableEmployees />
        </Container>
      </Body>
    )
  }
}
