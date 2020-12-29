import React from 'react'
import styled from 'styled-components'
import { InferProps } from 'prop-types'

type StyledRadio = {
  value: string
  name: string
  id: string
  checked: boolean
  onChange?: (e: KeyboardEvent) => void
  onKeyUp?: (e: KeyboardEvent) => void
}

// Using InferredProps because it's interesting
type InferredProps = InferProps<StyledRadio>

const Radio = styled.input.attrs({
  type: 'radio',
})<InferredProps>`
  :checked + label {
    background-color: rgba(255, 255, 255, 0.15);
    border-color: ;
  }
  :focus + label {
  }
  :hover + label {
    background-color: rgba(255, 255, 255, 0.3);
  }
  opacity: 0;
  display: none;
  width: 0;
  height: 0;
`

export default (props: InferredProps): JSX.Element => <Radio {...props}></Radio>
