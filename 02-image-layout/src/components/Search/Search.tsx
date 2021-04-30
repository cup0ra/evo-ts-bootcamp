import React from 'react';
import styled from 'styled-components';
import { HandleChange, HandleSubmit } from '../../models/model';

interface IProps {
  search: string;
  handleChange: HandleChange;
  handleSubmit: HandleSubmit;
}
const Input = styled.input`
  width: 85%;
  flex-grow: 1;
  border-radius: 5px;
  border: none;
  padding-left: 15px;
`;
const Form = styled.form`
  display: flex;
  gap: 7px;
  margin: 5px 10px;
`;
const Button = styled.button`
  width: 100px;
  border: 2px solid black;
  background-color: black;
  color: white;
  border-radius: 5px;
  padding: 5px;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    border: 2px solid black;
    background-color: white;
    color: black;
  }
`;
export const Search = ({
  search,
  handleChange,
  handleSubmit,
}: IProps): JSX.Element => {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" value={search} onChange={handleChange} />
        <Button type="submit">SEARCH</Button>
      </Form>
    </>
  );
};
