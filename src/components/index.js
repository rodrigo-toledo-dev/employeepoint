import styled from 'styled-components/native';

export const Body = styled.ScrollView`
  height: 100%;
  width: 100%;
  padding: 10px;
  background-color: #d6c5d2;
`;

export const CustomImage = styled.Image`
  justify-content: center;
  align-self: center;
  width: 160px;
  height: 160px;
  border-radius: 100px;
`;

export const EmployeeImage = styled.Image`
  justify-content: center;
  align-self: center;
  width: 120px;
  height: 120px;
  border-radius: 100px;
  border-color: #91768b;
  border-width: 5px
`;

export const Container = styled.View`
  margin: 5px;
  padding: 5px;
  border: 5px solid #91768b;
  border-radius: 10px;
`;

export const EmployeeSelect = styled.TouchableOpacity`
  justify-content: center;
  align-self: center;
  width: 160px;
  height: 160px;
  border-radius: 100px;
`;

export const H3 = styled.Text`
  margin: 5px;
  align-self: center;
  font-size: 16px;
  font-weight: bold;
`;

export const Table = styled.View`
  flex-direction: row;
  align-self: flex-start;
  padding: 10px;
  margin-top: 10px;
  background-color: #fafafa;
  width: 100%;
`;

export const TableEmployees = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin-top: 10px;
  background-color: transparent;
  width: 100%;
`;

export const TableOperations = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  width: 60%;
`;


export const RowEmployees = styled.View`
  padding: 10px;
  margin-top: 10px;
  background-color: #fafafa;
  width: 100%;
  border-radius: 5px;
`;
