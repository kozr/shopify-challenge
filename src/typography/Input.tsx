import React from 'react'
import styled, { InputTheme } from 'styled-components'

const Input = styled.input.attrs({
  type: 'text',
})<InputTheme>`
  width: ${({ width }) => width ?? '200px'};
  height: ${({ height }) => height ?? '5%'};
  font-size: ${({ fontSize }) => fontSize ?? '12px'};
  color: white;
  font-family: 'HKGrotesk Light';
  padding: 5px 10px 5px 10px;
  margin: 7px 0;
  box-sizing: border-box;
  border: 2px solid white;
  background-color: rgba(0%, 0%, 0%, 10%);
  &:focus {
    outline: none;
  }
`

export default (props: InputTheme): JSX.Element => <Input {...props}></Input>
