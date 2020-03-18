import React from 'react';
import { StyleEmployeeImage } from './styles';

const EmployeeImage = ({employee}) => {
  return <StyleEmployeeImage source={employee.imageProfile} />
};

export default EmployeeImage;
