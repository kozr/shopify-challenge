import React from 'react'
import styled from 'styled-components'
import { InferProps } from 'prop-types'

type StyledInput = {
  width?: string
  height?: string
  fontSize?: string
  onChange?: (e: KeyboardEvent) => void
  onKeyUp?: (e: KeyboardEvent) => void
}

// Using InferredProps because it's interesting
type InferredProps = InferProps<StyledInput>

const Input = styled.input.attrs({
  type: 'text',
})<InferredProps>`
  width: ${({ width }) => width ?? '200px'};
  height: ${({ height }) => height ?? '5%'};
  font-size: ${({ fontSize }) => fontSize ?? '12px'};
  color: white;
  font-family: 'HKGrotesk Light';
  padding: 5px 10px 5px 10px;
  margin: 20px 0 20px 0;
  box-sizing: border-box;
  border: 2px solid white;
  background-color: rgba(0%, 0%, 0%, 10%);
  &:focus {
    outline: none;
  }
`

export default (props: InferredProps): JSX.Element => <Input {...props}></Input>
