import styled from 'styled-components'

export const EmployeesGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  padding: 10px;
  margin-top: 10px;
  background-color: transparent;
`;


export const EmployeeButton = styled.TouchableOpacity`
  justify-content: center;
  align-self: center;
  width: 160px;
  height: 160px;
`;

export const RowEmployees = styled.View`
  padding: 10px;
  margin-top: 10px;
  background-color: #fafafa;
  width: 100%;
  border-radius: 5px;
`;

export const TableOperations = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  width: 60%;
`;
